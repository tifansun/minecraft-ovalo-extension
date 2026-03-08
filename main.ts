//% weight=100 color=#32A9D9 icon="◎"
namespace figuras {
    /**
     * Build an oval wall of specified ratio, length, and height out of block
     * @param bloque the Minecraft block the wall will be built with
     * @param radio how big is te oval
     * @param largo how far a wall will span in blocks
     * @param altura the number of blocks high the wall will stand
     */
    //% block="dibujar ovalo con bloque $bloque radio $radio largo $largo altura $altura||ubicacion $ubicacion"
    //% bloque.shadow=minecraftBlock
    //% radio.defl=30
    //% largo.defl=70
    //% altura.defl=3
    //% ubicacion.shadow=minecraftCreatePosition
    //% blockId="figurasOvalo" weight=100
    export function ovalo(bloque: number, radio: number, largo: number, altura: number, ubicacion?: Position) {
        let x = 0
        let z = 0
        let z2 = 0
        if(!ubicacion){
            ubicacion = player.position()
        }
        for (let angulo2 = 0; angulo2 <= 180; angulo2++) {
            x = ubicacion.getValue(Axis.X) + radio * Math.cos(angulo2 * 0.0174)
            z = ubicacion.getValue(Axis.Z) - radio * Math.sin(angulo2 * 0.0174)
            z2 = ubicacion.getValue(Axis.Z) + radio * Math.sin(angulo2 * 0.0174)
            blocks.fill(
                bloque,
                world(x, ubicacion.getValue(Axis.Y), z),
                positions.add(
                    world(x, ubicacion.getValue(Axis.Y), z),
                    pos(0, altura, 0)
                ),
                FillOperation.Replace
            )
            blocks.fill(
                bloque,
                world(x, ubicacion.getValue(Axis.Y), z2 + largo),
                positions.add(
                    world(x, ubicacion.getValue(Axis.Y), z2),
                    pos(0, altura, largo)
                ),
                FillOperation.Replace
            )
        }

        blocks.fill(
            bloque,
            positions.add(
                ubicacion,
                pos(-1 * radio, 0, 0)
            ),
            positions.add(
                ubicacion,
                pos(-1 * radio, altura, largo)
            ),
            FillOperation.Replace
        )

        blocks.fill(
            bloque,
            positions.add(
                ubicacion,
                pos(radio, 0, 0)
            ),
            positions.add(
                ubicacion,
                pos(radio, altura, largo)
            ),
            FillOperation.Replace
        )
    }
}
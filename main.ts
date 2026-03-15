//% weight=100 color=#32A9D9 icon="◎"
namespace figuras {
    //% block="dibujar ovalo con bloque $bloque radio $radio largo $largo alto $alto"
    //% bloque.shadow=minecraftBlock
    //% radio.defl=30
    //% largo.defl=70
    //% alto.defl=3
    export function ovalo(bloque: number, radio: number, largo: number, alto: number) {
        let x = 0
        let z = 0
        let z2 = 0
        let ubicacion = player.position()
        for (let angulo2 = 0; angulo2 <= 180; angulo2++) {

            x = ubicacion.getValue(Axis.X) + radio * Math.cos(angulo2 * 0.0174)
            z = ubicacion.getValue(Axis.Z) - radio * Math.sin(angulo2 * 0.0174)
            z2 = ubicacion.getValue(Axis.Z) + radio * Math.sin(angulo2 * 0.0174)

            blocks.fill(
                bloque,
                world(x, ubicacion.getValue(Axis.Y), z),
                positions.add(
                    world(x, ubicacion.getValue(Axis.Y), z),
                    pos(0, alto, 0)
                ),
                FillOperation.Replace
            )

            blocks.fill(
                bloque,
                world(x, ubicacion.getValue(Axis.Y), z2 + largo),
                positions.add(
                    world(x, ubicacion.getValue(Axis.Y), z2),
                    pos(0, alto, largo)
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
                pos(-1 * radio, alto, largo)
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
                pos(radio, alto, largo)
            ),
            FillOperation.Replace
        )
    }
    //% block="dibujar piso con bloque $bloque radio $radio largo $largo"
    //% bloque.shadow=minecraftBlock
    //% radio.defl=30
    //% largo.defl=70
    export function piso(bloque: number, radio: number, largo: number) {
        let x = 0
        let z = 0
        let z2 = 0
        let ubicacion = player.position()
        for (let angulo2 = 0; angulo2 <= 180; angulo2++) {

            x = ubicacion.getValue(Axis.X) + radio * Math.cos(angulo2 * 0.0174)
            z = ubicacion.getValue(Axis.Z) - radio * Math.sin(angulo2 * 0.0174)
            z2 = ubicacion.getValue(Axis.Z) + radio * Math.sin(angulo2 * 0.0174)

            blocks.fill(
                bloque,
                positions.add(
                    world(x, ubicacion.getValue(Axis.Y), z),
                    pos(0, -1, 0)
                ),
                positions.add(
                    world(x, ubicacion.getValue(Axis.Y), z2),
                    pos(0, -1, largo)
                ),
                FillOperation.Replace
            )
        }
    }
}
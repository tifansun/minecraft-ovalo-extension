//% weight=100 color=#32A9D9 icon="◎"
namespace figuras {
    //% block="dibujar ovalo con bloque %bloque posicion %ubicacion radio %radio largo %largo altura %altura"
    export function ovalo(bloque: Block, ubicacion: Position, radio: number, largo: number, altura: number) {
        let x = 0
        let z = 0
        let z2 = 0
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
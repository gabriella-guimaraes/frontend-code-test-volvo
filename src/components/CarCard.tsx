import { CardContent, Card, Text, Spacer, Flex, Row, Link } from "vcc-ui"
import { Car } from "./types/car.interface"
import Image from "next/image"

import styles from "../../public/css/carCard.module.css"

interface CardProps {
    car: Car
}

export function CarCard({ car } : CardProps) {
    return(
        <div className={styles.cardWrapper}>
                <Text variant="bates" subStyle="emphasis">{car?.bodyType}</Text>
                <Flex extend={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    margin: 0
                }}>
                        <Text variant="amundsen" extend={{ margin: 0 }}>{car?.modelName}</Text>
                        <Text variant="bates" subStyle="inline-link" extend={{ margin: 0 }}>{car?.modelType}</Text>
                </Flex>
                <Spacer />
                <Image src={car.imageUrl} alt={car.modelName} width="250" height="200"></Image>
                <Spacer />
                <Flex extend={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                        <Link href="somewhere" arrow="right">
                            SHOP
                        </Link>
                         <Link href="somewhere"arrow="right">
                            LEARN
                        </Link>
                </Flex>
        </div>
    )
}
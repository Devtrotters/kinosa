import React, { createRef, useEffect, useRef, useState } from 'react';
import {
    CreationItem,
    CreationsContainer,
    CreationsImage,
    CreationsImageContainer,
    CreationsImageText,
    CreationsImageTextContainer,
    CreationsImageTitle,
    CreationsItemTitle,
    CreationsItemWrapper,
    CreationsSliderButton,
    CreationsSliderHeaderContainer,
    CreationsSliderText,
    CreationsSliderTextContainer,
    CreationsText,
    CreationsTitle
} from 'styles/Jus/Creations.style';

export default function Creations() {
    const [categoryVisible, setcategoryVisible] = useState([1, 2]);
    const [selectedItem, setselectedItem] = useState(1);
    const creations = {
        titre: 'Nos créations',
        texte:
            'Nous renouvelons nos jus et smoothies du moment 8 fois par an ! En effet, nous souhaitons coller aux arrivages saisonniers tout en vous permettant de découvrir de nouvelles saveurs. Consultez ci-dessus les créations qui vos attendent !',
        creations: [
            {
                id: 1,
                titre: 'Intemporel',
                subcateg: [
                    {
                        id: 1,
                        titre: 'Intemporel 1',
                        images: [
                            {
                                id: 1,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/d7d6/ad6e/4b5d81f177d282955101479900099ef6?Expires=1620604800&Signature=Lpx~gU3urla5fPlVeFq2WlBKLyg8tA-FzvcbZ8NXOrMoVYN3afY-FawkpvuAawlLJt~IdeM4nd4~mkL-7mK13alkiuhQpgfAWj3-fAiVhu4~HuWx~02MUbr7FjML9guXSGfje9CS8iaiMjPLQAWTfFsZTg2yXOhs49vRoynsN2pjUd5kpoEg5o90HdK-WrObB4LKi65q5GsjWsaYN1xsBeomcIpEfUsuA940c2E9sCRMDKiyPhkoIpCxPefobzcE~dZAtn6uy0giUewXvJ9tmm1wBIoYDIq3ElGNop8gtyvBOFdfJHS5CcRvYaXtWW6phMnR3Fy9BTDVzUBEYOtkuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Pomine',
                                composition: 'Pomme, Mandarine, Orange'
                            },
                            {
                                id: 2,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/c3f9/e418/84af77878a11dadb1a4ab5b27caf46de?Expires=1620604800&Signature=apkXxsrQ51kAOj77Q2Y6hxBGpwf4n3E6BXsOobaFBUj3HQF2IdVesa05a09VxK-~Pssh36-5C8qIQ4RA0ESEK4qUmDt-enje~Su41iUUzxckIjL6NhJfX2-arYmqndSp-9NgRt22eu4GHJIpGHKzqgoj8Qr4g6x8gz0DNlwhwEh~rcLV3bvylcZ1ZKcnWhe9gcDU035YDSaonJ4dUKtR3y2hX2oxOCQlvIRLdML4m72cATenCrDJRMArcma-EFBnZktkN40MTGrkJFW19NlJseAYcc9ICXt8G1UCzBlU~aKBw9NcJO0PpM7Yi6EkwoLtDVrnUsI5TCdsj9-ms-lrEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Grain de folie',
                                composition: 'Ananas, Grenade, Banane'
                            }
                        ]
                    },
                    {
                        id: 2,
                        titre: 'Intemporel 2',
                        images: [
                            {
                                id: 1,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/4626/44ec/6ae8655372682ae91cc5253d8fb956e9?Expires=1620604800&Signature=aLpjr4jtZbt5sjq7P1pMzhXw70McJMIKZVmvHglVNudryV~u8mFDmRRVat9kXhBabgYU-KbIvEjVyFkidcbT1pO~160PYsak1dLARDDy1DbRoOErfmKjoKGppd80FymDGDWMpxt7T0C58wczQt9sK2HYORK14FarxhItd7yXDNJZQvSSEz26kF8kicDM80dSY310LfE1yb8OXShFnw0wdxsYIUr~FsnHEiUn2gdgpUedTzxpW776Mf73rAJ7lz6Awn25a7swomhjq~oWKOux3ezJCU3XsDgma~4Yr37UtrXQfDGxVHDVgpide~jJG30gPnThwoQ30xJl5HNERo2kfg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Jus miracle',
                                composition: 'Pomme, Betterave, Carotte'
                            },
                            {
                                id: 2,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/61a4/6974/dcab44e212ba4911fca603c349185557?Expires=1620604800&Signature=K175BBdy-btfOiQlfjyx1LkwNBMlylviPMXHXfY5JkRl67AGQa7FeddNPEqfx-aMf1Vk63-KCqtrvLg6K3peh7swyB6tO9-DY~-QXnXhlw7dR4exQgRPinrgS5V6Ag8EJC9BLJUpBcPxn0A4rkTi171JRB26tNo-XuRqLik~0tXwdK~imaxucMxdH2VZzWljCYWLkq8AqzxUGEa9Zr842dG8Uf5HZErE28L1NsCQ~pMskqKHkcHXPB1Aiby3WLdbcLpzqIdtMmlVk7d4BkjHSw1-0gqt9Q68-AL~OPKai3g4zhtYXtKZDYHZhFthy3WCm-l-gibdIpVh7yxSqCeq3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Starskin',
                                composition: 'Banane, Clémentine, Ananas'
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                titre: 'Automne',
                subcateg: [
                    {
                        id: 1,
                        titre: 'Automne 1',
                        images: [
                            {
                                id: 1,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/d7d6/ad6e/4b5d81f177d282955101479900099ef6?Expires=1620604800&Signature=Lpx~gU3urla5fPlVeFq2WlBKLyg8tA-FzvcbZ8NXOrMoVYN3afY-FawkpvuAawlLJt~IdeM4nd4~mkL-7mK13alkiuhQpgfAWj3-fAiVhu4~HuWx~02MUbr7FjML9guXSGfje9CS8iaiMjPLQAWTfFsZTg2yXOhs49vRoynsN2pjUd5kpoEg5o90HdK-WrObB4LKi65q5GsjWsaYN1xsBeomcIpEfUsuA940c2E9sCRMDKiyPhkoIpCxPefobzcE~dZAtn6uy0giUewXvJ9tmm1wBIoYDIq3ElGNop8gtyvBOFdfJHS5CcRvYaXtWW6phMnR3Fy9BTDVzUBEYOtkuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Pomine',
                                composition: 'Pomme, Mandarine, Orange'
                            },
                            {
                                id: 2,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/c3f9/e418/84af77878a11dadb1a4ab5b27caf46de?Expires=1620604800&Signature=apkXxsrQ51kAOj77Q2Y6hxBGpwf4n3E6BXsOobaFBUj3HQF2IdVesa05a09VxK-~Pssh36-5C8qIQ4RA0ESEK4qUmDt-enje~Su41iUUzxckIjL6NhJfX2-arYmqndSp-9NgRt22eu4GHJIpGHKzqgoj8Qr4g6x8gz0DNlwhwEh~rcLV3bvylcZ1ZKcnWhe9gcDU035YDSaonJ4dUKtR3y2hX2oxOCQlvIRLdML4m72cATenCrDJRMArcma-EFBnZktkN40MTGrkJFW19NlJseAYcc9ICXt8G1UCzBlU~aKBw9NcJO0PpM7Yi6EkwoLtDVrnUsI5TCdsj9-ms-lrEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Grain de folie',
                                composition: 'Ananas, Grenade, Banane'
                            }
                        ]
                    },
                    {
                        id: 2,
                        titre: 'Automne 2',
                        images: [
                            {
                                id: 1,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/4626/44ec/6ae8655372682ae91cc5253d8fb956e9?Expires=1620604800&Signature=aLpjr4jtZbt5sjq7P1pMzhXw70McJMIKZVmvHglVNudryV~u8mFDmRRVat9kXhBabgYU-KbIvEjVyFkidcbT1pO~160PYsak1dLARDDy1DbRoOErfmKjoKGppd80FymDGDWMpxt7T0C58wczQt9sK2HYORK14FarxhItd7yXDNJZQvSSEz26kF8kicDM80dSY310LfE1yb8OXShFnw0wdxsYIUr~FsnHEiUn2gdgpUedTzxpW776Mf73rAJ7lz6Awn25a7swomhjq~oWKOux3ezJCU3XsDgma~4Yr37UtrXQfDGxVHDVgpide~jJG30gPnThwoQ30xJl5HNERo2kfg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Jus miracle',
                                composition: 'Pomme, Betterave, Carotte'
                            },
                            {
                                id: 2,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/61a4/6974/dcab44e212ba4911fca603c349185557?Expires=1620604800&Signature=K175BBdy-btfOiQlfjyx1LkwNBMlylviPMXHXfY5JkRl67AGQa7FeddNPEqfx-aMf1Vk63-KCqtrvLg6K3peh7swyB6tO9-DY~-QXnXhlw7dR4exQgRPinrgS5V6Ag8EJC9BLJUpBcPxn0A4rkTi171JRB26tNo-XuRqLik~0tXwdK~imaxucMxdH2VZzWljCYWLkq8AqzxUGEa9Zr842dG8Uf5HZErE28L1NsCQ~pMskqKHkcHXPB1Aiby3WLdbcLpzqIdtMmlVk7d4BkjHSw1-0gqt9Q68-AL~OPKai3g4zhtYXtKZDYHZhFthy3WCm-l-gibdIpVh7yxSqCeq3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Starskin',
                                composition: 'Banane, Clémentine, Ananas'
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                titre: 'Hiver',
                subcateg: [
                    {
                        id: 1,
                        titre: 'Hiver 1',
                        images: [
                            {
                                id: 1,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/d7d6/ad6e/4b5d81f177d282955101479900099ef6?Expires=1620604800&Signature=Lpx~gU3urla5fPlVeFq2WlBKLyg8tA-FzvcbZ8NXOrMoVYN3afY-FawkpvuAawlLJt~IdeM4nd4~mkL-7mK13alkiuhQpgfAWj3-fAiVhu4~HuWx~02MUbr7FjML9guXSGfje9CS8iaiMjPLQAWTfFsZTg2yXOhs49vRoynsN2pjUd5kpoEg5o90HdK-WrObB4LKi65q5GsjWsaYN1xsBeomcIpEfUsuA940c2E9sCRMDKiyPhkoIpCxPefobzcE~dZAtn6uy0giUewXvJ9tmm1wBIoYDIq3ElGNop8gtyvBOFdfJHS5CcRvYaXtWW6phMnR3Fy9BTDVzUBEYOtkuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Pomine',
                                composition: 'Pomme, Mandarine, Orange'
                            },
                            {
                                id: 2,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/c3f9/e418/84af77878a11dadb1a4ab5b27caf46de?Expires=1620604800&Signature=apkXxsrQ51kAOj77Q2Y6hxBGpwf4n3E6BXsOobaFBUj3HQF2IdVesa05a09VxK-~Pssh36-5C8qIQ4RA0ESEK4qUmDt-enje~Su41iUUzxckIjL6NhJfX2-arYmqndSp-9NgRt22eu4GHJIpGHKzqgoj8Qr4g6x8gz0DNlwhwEh~rcLV3bvylcZ1ZKcnWhe9gcDU035YDSaonJ4dUKtR3y2hX2oxOCQlvIRLdML4m72cATenCrDJRMArcma-EFBnZktkN40MTGrkJFW19NlJseAYcc9ICXt8G1UCzBlU~aKBw9NcJO0PpM7Yi6EkwoLtDVrnUsI5TCdsj9-ms-lrEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Grain de folie',
                                composition: 'Ananas, Grenade, Banane'
                            }
                        ]
                    },
                    {
                        id: 2,
                        titre: 'Hiver 2',
                        images: [
                            {
                                id: 1,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/4626/44ec/6ae8655372682ae91cc5253d8fb956e9?Expires=1620604800&Signature=aLpjr4jtZbt5sjq7P1pMzhXw70McJMIKZVmvHglVNudryV~u8mFDmRRVat9kXhBabgYU-KbIvEjVyFkidcbT1pO~160PYsak1dLARDDy1DbRoOErfmKjoKGppd80FymDGDWMpxt7T0C58wczQt9sK2HYORK14FarxhItd7yXDNJZQvSSEz26kF8kicDM80dSY310LfE1yb8OXShFnw0wdxsYIUr~FsnHEiUn2gdgpUedTzxpW776Mf73rAJ7lz6Awn25a7swomhjq~oWKOux3ezJCU3XsDgma~4Yr37UtrXQfDGxVHDVgpide~jJG30gPnThwoQ30xJl5HNERo2kfg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Jus miracle',
                                composition: 'Pomme, Betterave, Carotte'
                            },
                            {
                                id: 2,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/61a4/6974/dcab44e212ba4911fca603c349185557?Expires=1620604800&Signature=K175BBdy-btfOiQlfjyx1LkwNBMlylviPMXHXfY5JkRl67AGQa7FeddNPEqfx-aMf1Vk63-KCqtrvLg6K3peh7swyB6tO9-DY~-QXnXhlw7dR4exQgRPinrgS5V6Ag8EJC9BLJUpBcPxn0A4rkTi171JRB26tNo-XuRqLik~0tXwdK~imaxucMxdH2VZzWljCYWLkq8AqzxUGEa9Zr842dG8Uf5HZErE28L1NsCQ~pMskqKHkcHXPB1Aiby3WLdbcLpzqIdtMmlVk7d4BkjHSw1-0gqt9Q68-AL~OPKai3g4zhtYXtKZDYHZhFthy3WCm-l-gibdIpVh7yxSqCeq3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Starskin',
                                composition: 'Banane, Clémentine, Ananas'
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                titre: 'Printemps',
                subcateg: [
                    {
                        id: 1,
                        titre: 'Printemps 1',
                        images: [
                            {
                                id: 1,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/d7d6/ad6e/4b5d81f177d282955101479900099ef6?Expires=1620604800&Signature=Lpx~gU3urla5fPlVeFq2WlBKLyg8tA-FzvcbZ8NXOrMoVYN3afY-FawkpvuAawlLJt~IdeM4nd4~mkL-7mK13alkiuhQpgfAWj3-fAiVhu4~HuWx~02MUbr7FjML9guXSGfje9CS8iaiMjPLQAWTfFsZTg2yXOhs49vRoynsN2pjUd5kpoEg5o90HdK-WrObB4LKi65q5GsjWsaYN1xsBeomcIpEfUsuA940c2E9sCRMDKiyPhkoIpCxPefobzcE~dZAtn6uy0giUewXvJ9tmm1wBIoYDIq3ElGNop8gtyvBOFdfJHS5CcRvYaXtWW6phMnR3Fy9BTDVzUBEYOtkuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Pomine',
                                composition: 'Pomme, Mandarine, Orange'
                            },
                            {
                                id: 2,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/c3f9/e418/84af77878a11dadb1a4ab5b27caf46de?Expires=1620604800&Signature=apkXxsrQ51kAOj77Q2Y6hxBGpwf4n3E6BXsOobaFBUj3HQF2IdVesa05a09VxK-~Pssh36-5C8qIQ4RA0ESEK4qUmDt-enje~Su41iUUzxckIjL6NhJfX2-arYmqndSp-9NgRt22eu4GHJIpGHKzqgoj8Qr4g6x8gz0DNlwhwEh~rcLV3bvylcZ1ZKcnWhe9gcDU035YDSaonJ4dUKtR3y2hX2oxOCQlvIRLdML4m72cATenCrDJRMArcma-EFBnZktkN40MTGrkJFW19NlJseAYcc9ICXt8G1UCzBlU~aKBw9NcJO0PpM7Yi6EkwoLtDVrnUsI5TCdsj9-ms-lrEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Grain de folie',
                                composition: 'Ananas, Grenade, Banane'
                            }
                        ]
                    },
                    {
                        id: 2,
                        titre: 'Printemps 2',
                        images: [
                            {
                                id: 1,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/4626/44ec/6ae8655372682ae91cc5253d8fb956e9?Expires=1620604800&Signature=aLpjr4jtZbt5sjq7P1pMzhXw70McJMIKZVmvHglVNudryV~u8mFDmRRVat9kXhBabgYU-KbIvEjVyFkidcbT1pO~160PYsak1dLARDDy1DbRoOErfmKjoKGppd80FymDGDWMpxt7T0C58wczQt9sK2HYORK14FarxhItd7yXDNJZQvSSEz26kF8kicDM80dSY310LfE1yb8OXShFnw0wdxsYIUr~FsnHEiUn2gdgpUedTzxpW776Mf73rAJ7lz6Awn25a7swomhjq~oWKOux3ezJCU3XsDgma~4Yr37UtrXQfDGxVHDVgpide~jJG30gPnThwoQ30xJl5HNERo2kfg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Jus miracle',
                                composition: 'Pomme, Betterave, Carotte'
                            },
                            {
                                id: 2,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/61a4/6974/dcab44e212ba4911fca603c349185557?Expires=1620604800&Signature=K175BBdy-btfOiQlfjyx1LkwNBMlylviPMXHXfY5JkRl67AGQa7FeddNPEqfx-aMf1Vk63-KCqtrvLg6K3peh7swyB6tO9-DY~-QXnXhlw7dR4exQgRPinrgS5V6Ag8EJC9BLJUpBcPxn0A4rkTi171JRB26tNo-XuRqLik~0tXwdK~imaxucMxdH2VZzWljCYWLkq8AqzxUGEa9Zr842dG8Uf5HZErE28L1NsCQ~pMskqKHkcHXPB1Aiby3WLdbcLpzqIdtMmlVk7d4BkjHSw1-0gqt9Q68-AL~OPKai3g4zhtYXtKZDYHZhFthy3WCm-l-gibdIpVh7yxSqCeq3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Starskin',
                                composition: 'Banane, Clémentine, Ananas'
                            }
                        ]
                    }
                ]
            },
            {
                id: 5,
                titre: 'Eté',
                subcateg: [
                    {
                        id: 1,
                        titre: 'Eté 1',
                        images: [
                            {
                                id: 1,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/d7d6/ad6e/4b5d81f177d282955101479900099ef6?Expires=1620604800&Signature=Lpx~gU3urla5fPlVeFq2WlBKLyg8tA-FzvcbZ8NXOrMoVYN3afY-FawkpvuAawlLJt~IdeM4nd4~mkL-7mK13alkiuhQpgfAWj3-fAiVhu4~HuWx~02MUbr7FjML9guXSGfje9CS8iaiMjPLQAWTfFsZTg2yXOhs49vRoynsN2pjUd5kpoEg5o90HdK-WrObB4LKi65q5GsjWsaYN1xsBeomcIpEfUsuA940c2E9sCRMDKiyPhkoIpCxPefobzcE~dZAtn6uy0giUewXvJ9tmm1wBIoYDIq3ElGNop8gtyvBOFdfJHS5CcRvYaXtWW6phMnR3Fy9BTDVzUBEYOtkuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Pomine',
                                composition: 'Pomme, Mandarine, Orange'
                            },
                            {
                                id: 2,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/c3f9/e418/84af77878a11dadb1a4ab5b27caf46de?Expires=1620604800&Signature=apkXxsrQ51kAOj77Q2Y6hxBGpwf4n3E6BXsOobaFBUj3HQF2IdVesa05a09VxK-~Pssh36-5C8qIQ4RA0ESEK4qUmDt-enje~Su41iUUzxckIjL6NhJfX2-arYmqndSp-9NgRt22eu4GHJIpGHKzqgoj8Qr4g6x8gz0DNlwhwEh~rcLV3bvylcZ1ZKcnWhe9gcDU035YDSaonJ4dUKtR3y2hX2oxOCQlvIRLdML4m72cATenCrDJRMArcma-EFBnZktkN40MTGrkJFW19NlJseAYcc9ICXt8G1UCzBlU~aKBw9NcJO0PpM7Yi6EkwoLtDVrnUsI5TCdsj9-ms-lrEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Grain de folie',
                                composition: 'Ananas, Grenade, Banane'
                            }
                        ]
                    },
                    {
                        id: 2,
                        titre: 'Eté 2',
                        images: [
                            {
                                id: 1,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/4626/44ec/6ae8655372682ae91cc5253d8fb956e9?Expires=1620604800&Signature=aLpjr4jtZbt5sjq7P1pMzhXw70McJMIKZVmvHglVNudryV~u8mFDmRRVat9kXhBabgYU-KbIvEjVyFkidcbT1pO~160PYsak1dLARDDy1DbRoOErfmKjoKGppd80FymDGDWMpxt7T0C58wczQt9sK2HYORK14FarxhItd7yXDNJZQvSSEz26kF8kicDM80dSY310LfE1yb8OXShFnw0wdxsYIUr~FsnHEiUn2gdgpUedTzxpW776Mf73rAJ7lz6Awn25a7swomhjq~oWKOux3ezJCU3XsDgma~4Yr37UtrXQfDGxVHDVgpide~jJG30gPnThwoQ30xJl5HNERo2kfg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Jus miracle',
                                composition: 'Pomme, Betteraveee, Carotte'
                            },
                            {
                                id: 2,
                                url:
                                    'https://s3-alpha-sig.figma.com/img/61a4/6974/dcab44e212ba4911fca603c349185557?Expires=1620604800&Signature=K175BBdy-btfOiQlfjyx1LkwNBMlylviPMXHXfY5JkRl67AGQa7FeddNPEqfx-aMf1Vk63-KCqtrvLg6K3peh7swyB6tO9-DY~-QXnXhlw7dR4exQgRPinrgS5V6Ag8EJC9BLJUpBcPxn0A4rkTi171JRB26tNo-XuRqLik~0tXwdK~imaxucMxdH2VZzWljCYWLkq8AqzxUGEa9Zr842dG8Uf5HZErE28L1NsCQ~pMskqKHkcHXPB1Aiby3WLdbcLpzqIdtMmlVk7d4BkjHSw1-0gqt9Q68-AL~OPKai3g4zhtYXtKZDYHZhFthy3WCm-l-gibdIpVh7yxSqCeq3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                                titre: 'Starskin',
                                composition: 'Banane, Clémentine, Ananas'
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const categories = creations.creations.map((el: any) => el.id);
    const creation = creations.creations.filter((creation) => creation.id == selectedItem);

    const handleSelectedItem = (id: number) => {
        const creationsWrapper = document.getElementById('creations');
        creationsWrapper.style.opacity = '0';
        const timer = setTimeout(() => {
            setselectedItem(id);
            creationsWrapper.style.opacity = '1';
        }, 400);
    };

    const handleClick = (param: string) => {
        const max = categories.length;
        const min = categories[0];

        const sliderText = document.getElementById('sliderText');

        if (param === 'increase') {
            if (categoryVisible[0] == max && categoryVisible[1] == min) {
                sliderText.style.flexDirection = 'row';
                setcategoryVisible([min, min + 1]);
                handleSelectedItem(min);
            } else if (categoryVisible[0] == max - 1 && categoryVisible[1] == max) {
                sliderText.style.flexDirection = 'row-reverse';
                setcategoryVisible([max, min]);
                handleSelectedItem(categoryVisible[0] + 1);
            } else {
                setcategoryVisible([categoryVisible[0] + 1, categoryVisible[1] + 1]);
                handleSelectedItem(categoryVisible[0] + 1);
            }
        } else if (param === 'decrease') {
            if (categoryVisible[0] == min && categoryVisible[1] == min + 1) {
                sliderText.style.flexDirection = 'row-reverse';
                setcategoryVisible([max, min]);
                handleSelectedItem(max);
            } else if (categoryVisible[0] == max && categoryVisible[1] == min) {
                sliderText.style.flexDirection = 'row';
                setcategoryVisible([max - 1, max]);
                handleSelectedItem(categoryVisible[0] - 1);
            } else {
                setcategoryVisible([categoryVisible[0] - 1, categoryVisible[1] - 1]);
                handleSelectedItem(categoryVisible[0] - 1);
            }
        }
    };

    return (
        <CreationsContainer>
            <CreationsTitle>{creations.titre}</CreationsTitle>
            <CreationsSliderHeaderContainer>
                <CreationsSliderButton
                    onClick={() => {
                        handleClick('decrease');
                    }}
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                        cx="12.5"
                        cy="12.5"
                        r="12.5"
                        transform="rotate(-180 12.5 12.5)"
                        fill="#007A0C"
                    />
                    <path
                        d="M14.3732 8.16277L8.43243 11.8263C7.85586 12.1864 7.85586 12.9425 8.43243 13.2936L14.3732 16.9661C15.0631 17.3802 16 16.9571 16 16.228L16 8.90088C16 8.17177 15.0631 7.7487 14.3732 8.16277Z"
                        fill="white"
                    />
                </CreationsSliderButton>
                <CreationsSliderTextContainer id="sliderText">
                    {creations.creations.map((el: any) => (
                        <CreationsSliderText
                            onClick={() => {
                                handleSelectedItem(el.id);
                            }}
                            key={el.id}
                            className={
                                (selectedItem === el.id ? 'selected' : '') +
                                (categoryVisible.includes(el.id) ? ' visible' : '')
                            }>
                            {el.titre}
                        </CreationsSliderText>
                    ))}
                </CreationsSliderTextContainer>
                <CreationsSliderButton
                    onClick={() => {
                        handleClick('increase');
                    }}
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#007A0C" />
                    <path
                        d="M10.6268 16.8372L16.5676 13.1737C17.1441 12.8136 17.1441 12.0575 16.5676 11.7064L10.6268 8.03386C9.93694 7.61979 9 8.04286 9 8.77197L9 16.0991C9 16.8282 9.93694 17.2513 10.6268 16.8372Z"
                        fill="white"
                    />
                </CreationsSliderButton>
            </CreationsSliderHeaderContainer>
            <CreationsItemWrapper id="creations">
                {creation.map((categ: any) =>
                    categ.subcateg.map((subcateg: any) => (
                        <CreationItem key={subcateg.id}>
                            <CreationsItemTitle key={subcateg.id}>
                                {subcateg.titre}
                            </CreationsItemTitle>

                            {subcateg.images.map((image: any) => (
                                <CreationsImageContainer key={image.id}>
                                    <CreationsImage
                                        alt={image.titre}
                                        key={image.id}
                                        src={image.url}
                                    />
                                    <CreationsImageTextContainer key={image.id + 1}>
                                        <CreationsImageTitle key={image.id}>
                                            {image.titre}
                                        </CreationsImageTitle>
                                        <CreationsImageText key={image.id + 1}>
                                            {image.composition}
                                        </CreationsImageText>
                                    </CreationsImageTextContainer>
                                </CreationsImageContainer>
                            ))}
                        </CreationItem>
                    ))
                )}
            </CreationsItemWrapper>
            <CreationsText>{creations.texte}</CreationsText>
        </CreationsContainer>
    );
}
/*
if (param === 'increase') {
            if (categoryVisible[1] <= max - 1) {
                setcategoryVisible([categoryVisible[0] + 1, categoryVisible[1] + 1]);
                handleSelectedItem(selectedItem + 1);
            }
        } else if (param === 'decrease') {
            if (categoryVisible[0] >= min + 1) {
                setcategoryVisible([categoryVisible[0] - 1, categoryVisible[1] - 1]);
                handleSelectedItem(selectedItem - 1);
            }
        }*/

import formatText from 'lib/formatText';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
    DropDown,
    DropDownItem,
    DropDownText,
    MenuContainer,
    MenuLink,
    MenuTitleContainer,
    MenuWrapper,
    Svg
} from 'styles/Home/Carte/Menu.style';
import { MediumText, Title } from 'styles/UI/Texts.style';
export default function Menu({ categories, products }) {
    const [open, setOpen] = useState(0);
    const [carte, setCarte] = useState([]);

    useEffect(() => {
        const fillCarte = function () {
            const carteTemp = [];
            categories.forEach((category: any) => {
                const data = {
                    name: '',
                    id: '',
                    link: null,
                    linkText: '',
                    produits: []
                };
                data.name = category.nom;
                data.id = category.id;
                data.link = category.lien;
                data.linkText = category.texteLien;
                carteTemp.push(data);
            });
            products.forEach((product: any) => {
                const categoryId = carteTemp.findIndex((el: any) => {
                    return String(el.id) === String(product.categorie.id);
                });
                carteTemp[categoryId].produits.push(product);
            });
            setCarte(() => carteTemp);
        };
        fillCarte();
    }, []);

    const openHandler = (e: any, id: number) => {
        e.preventDefault();
        setOpen(open === id ? 0 : id);
    };

    return (
        <MenuContainer>
            {carte.map((menu: any) => (
                <MenuWrapper key={menu.id}>
                    <MenuTitleContainer>
                        <div>
                            <Title>{formatText(menu.name)}</Title>
                            <Svg
                                data-v-74d53e62=""
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={open === menu.id ? 'open' : ''}
                                onClick={(e) => openHandler(e, menu.id)}>
                                <rect
                                    data-v-74d53e62=""
                                    x="14"
                                    y="5.5"
                                    width="3"
                                    height="14"
                                    transform="rotate(90 14 5.5)"
                                    fill="white"></rect>
                                <rect
                                    data-v-74d53e62=""
                                    x="8.5"
                                    y="14"
                                    width="3"
                                    height="14"
                                    transform="rotate(-180 8.5 14)"
                                    fill="white"></rect>
                            </Svg>
                        </div>
                        <div>
                            {menu.link && (
                                <Link href={menu.link}>
                                    <MenuLink>{formatText(menu.linkText)}</MenuLink>
                                </Link>
                            )}
                        </div>
                    </MenuTitleContainer>

                    <DropDown className={open === menu.id ? 'open' : ''}>
                        {menu.produits.map((el: any) => (
                            <DropDownItem key={el.id}>
                                <DropDownText>{formatText(el.nom)}</DropDownText>
                                <DropDownText>{formatText(el.prix + ' €')}</DropDownText>
                                <MediumText>{formatText(el.composition)}</MediumText>
                            </DropDownItem>
                        ))}
                    </DropDown>
                </MenuWrapper>
            ))}
        </MenuContainer>
    );
}

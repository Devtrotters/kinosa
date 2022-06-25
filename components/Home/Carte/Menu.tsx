import formatText from 'lib/formatText';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
    DropDown,
    DropDownItem,
    DropDownText,
    DropDownTextContainer,
    MenuContainer,
    MenuLink,
    MenuTitleContainer,
    MenuWrapper,
    Svg
} from 'styles/Home/Carte/Menu.style';
import { MediumText, Title } from 'styles/UI/Texts.style';
export default function Menu({ categories, products, allTypeProduits }) {
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
            {allTypeProduits.map((type: any) => {
                const typeCategories = categories.filter((el) => el.typeProduits.id === type.id);

                return (
                    <MenuWrapper key={type.id}>
                        <MenuTitleContainer>
                            <div>
                                <Title>{formatText(type.nom)}</Title>
                                <Svg
                                    data-v-74d53e62=""
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={open === type.id ? 'open' : ''}
                                    onClick={(e) => openHandler(e, type.id)}>
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
                            {/* <div>
                            {type.slug && (
                                <Link href={'/menu#' + type.slug}>
                                    <MenuLink>{formatText(type.texteLien)}</MenuLink>
                                </Link>
                            )}
                        </div> */}
                        </MenuTitleContainer>

                        <DropDown className={open === type.id ? 'open' : ''}>
                            {typeCategories.map((el: any) => {
                                const produits = products.filter(
                                    (product: any) => product.categorie.id === el.id
                                );
                                return (
                                    <DropDownItem
                                        key={el.id}
                                        style={{
                                            backgroundImage: `url(${el.image.url})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                        <DropDownTextContainer>
                                            <DropDownText>{formatText(el.nom)}</DropDownText>
                                            {produits.map((produit) => (
                                                <DropDownText key={produit.id}>
                                                    {formatText(produit.nom)}
                                                </DropDownText>
                                            ))}
                                            {/* <DropDownText>{formatText(el.prix + ' €')}</DropDownText>
                                    <MediumText>{formatText(el.composition)}</MediumText> */}
                                        </DropDownTextContainer>
                                    </DropDownItem>
                                );
                            })}
                        </DropDown>
                    </MenuWrapper>
                );
            })}
        </MenuContainer>
    );
}

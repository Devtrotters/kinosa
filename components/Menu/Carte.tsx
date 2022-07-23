import formatText from 'lib/formatText';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MenuLink, MenuText, MenuWrapper, Square } from 'styles/Concept/Concept.style';
import {
    AccompagnementContainer,
    CarteButton,
    CarteButtonContainer,
    CarteContainer,
    CarteSection,
    CarteTitle,
    CarteWrapper,
    CategoryContainer,
    Container,
    DropDown,
    ImageContainer,
    Img,
    Menu,
    MenuButton,
    MenuContainer,
    Price,
    ProdutTypeTitle,
    SaleWrapper,
    SauceToppingButton,
    SousCategorie,
    SucreWrapper,
    ToppingSucresButton
} from 'styles/Menu/Carte.style';
import { Text } from 'styles/UI/Texts.style';

export default function Carte({ categories, products, type }) {
    const [carte, setCarte] = useState([]);
    const [displayedMenus, setDisplayedMenus] = useState([]);
    const [selected, setSelected] = useState(
        categories[0].slug !== 'formules' ? categories[0].slug : categories[1].slug
    );
    const [openSauce, setOpenSauce] = useState([]);
    const [openTopping, setOpenTopping] = useState([]);
    const [openToppingSucres, setOpenToppingSucres] = useState([]);

    const openS = [],
        openT = [],
        openTs = [];
    categories.forEach((cat: any) => {
        openS.push(false);
        openT.push(false);
        openTs.push(false);
    });

    useEffect(() => {
        setOpenSauce(openS);
        setOpenTopping(openT);
        setOpenToppingSucres(openTs);
    }, []);

    useEffect(() => {
        const fillCarte = function () {
            const carteTemp = [];
            categories.forEach((category: any) => {
                if (category.nom !== 'Formules') {
                    const data = {
                        name: '',
                        id: '',
                        slug: '',
                        produits: []
                    };
                    data.name = category.nom;
                    data.id = category.id;
                    data.slug = category.slug;
                    carteTemp.push(data);
                }
            });

            products.forEach((product: any) => {
                if (product.categorie.nom !== 'Formules') {
                    const categoryId = carteTemp.findIndex((el: any) => {
                        return String(el.id) === String(product.categorie.id);
                    });
                    if (categoryId !== -1) {
                        carteTemp[categoryId].produits.push(product);
                    }
                }
            });
            setCarte(() => carteTemp);

            const displayedMenusTemp = [];
            carteTemp.forEach((el: any) => {
                const data = {
                    categoryId: '',
                    displayedId: ''
                };
                data.categoryId = el.id;
                data.displayedId = el.produits[0].id;
                displayedMenusTemp.push(data);
            });
            setDisplayedMenus(displayedMenusTemp);
        };
        fillCarte();
    }, []);

    const getIndexByCategory = (id: any) => {
        const found = false;
        for (let i = 0; i < displayedMenus.length && !found; i++)
            if (id === displayedMenus[i].categoryId) {
                return i;
            }
    };

    const productButtonClickHandler = (e: any, catId: any, id: any) => {
        e.preventDefault();
        const displayedMenuIndex = getIndexByCategory(catId);
        const displayedMenusCopy = [...displayedMenus];
        displayedMenusCopy.splice(displayedMenuIndex, 1, { categoryId: catId, displayedId: id });
        setDisplayedMenus(displayedMenusCopy);
    };

    const sauceToppingButtonClickHandler = (e: any, i: any, type: string) => {
        e.preventDefault();
        let tmp: any;
        let index: number;

        switch (type) {
            case 'sauce':
                setOpenTopping(openT);
                setOpenToppingSucres(openTs);
                tmp = [...openSauce];

                index = openSauce.findIndex((sauce) => sauce);
                if (index !== -1) {
                    tmp.splice(index, 1, false);
                }
                if (index !== i) {
                    tmp.splice(i, 1, true);
                }
                setOpenSauce(tmp);
                break;
            case 'topping':
                setOpenSauce(openS);
                setOpenToppingSucres(openTs);
                tmp = [...openTopping];

                index = openTopping.findIndex((topping) => topping);
                if (index !== -1) {
                    tmp.splice(index, 1, false);
                }
                if (index !== i) {
                    tmp.splice(i, 1, true);
                }

                setOpenTopping(tmp);
                break;
            case 'toppingSucre':
                setOpenSauce(openS);
                setOpenTopping(openT);
                tmp = [...openToppingSucres];

                index = openToppingSucres.findIndex((topping) => topping);
                if (index !== -1) {
                    tmp.splice(index, 1, false);
                }
                if (index !== i) {
                    tmp.splice(i, 1, true);
                }

                setOpenToppingSucres(tmp);
                break;
            default:
                throw new Error('undefined type: ' + type);
        }
    };

    return (
        <CarteContainer>
            {carte.map((category: any) => (
                <CarteWrapper id={category.slug} key={category.id}>
                    <article>
                        <CarteTitle as="h3">{formatText(category.name)}</CarteTitle>
                        <CarteButtonContainer>
                            {category.produits.map((product: any) => (
                                <CarteButton
                                    key={product.id}
                                    type="button"
                                    value={product.nom}
                                    className={
                                        displayedMenus[getIndexByCategory(category.id)]
                                            .displayedId === product.id
                                            ? 'displayed'
                                            : ''
                                    }
                                    onClick={(e) =>
                                        productButtonClickHandler(e, category.id, product.id)
                                    }
                                />
                            ))}
                        </CarteButtonContainer>
                    </article>
                    <Container>
                        {category.produits.map((product: any) => {
                            switch (product.typeDeProduit[0].__typename) {
                                case 'ProduitSaleRecord':
                                    return (
                                        <CategoryContainer
                                            key={product.id}
                                            className={
                                                displayedMenus[getIndexByCategory(category.id)]
                                                    .displayedId === product.id
                                                    ? 'displayed sale'
                                                    : 'sale'
                                            }>
                                            <SaleWrapper>
                                                <ProdutTypeTitle>Base</ProdutTypeTitle>
                                                {product.typeDeProduit[0].base.map((base: any) => (
                                                    <Text key={base.id}>
                                                        {formatText(base.nom)}
                                                    </Text>
                                                ))}
                                            </SaleWrapper>
                                            <SaleWrapper>
                                                <ProdutTypeTitle>Protéine</ProdutTypeTitle>
                                                {product.typeDeProduit[0].proteine.map(
                                                    (protein: any) => (
                                                        <Text key={protein.id}>
                                                            {formatText(protein.nom)}
                                                        </Text>
                                                    )
                                                )}
                                            </SaleWrapper>
                                            <SaleWrapper>
                                                <ProdutTypeTitle>Ingrédients</ProdutTypeTitle>
                                                {product.typeDeProduit[0].ingredient.map(
                                                    (ingredient: any) => (
                                                        <Text key={ingredient.id}>
                                                            {formatText(ingredient.nom)}
                                                        </Text>
                                                    )
                                                )}
                                            </SaleWrapper>
                                            <SaleWrapper>
                                                <AccompagnementContainer>
                                                    <ProdutTypeTitle>
                                                        Accompagnement(s)
                                                    </ProdutTypeTitle>
                                                    {product.typeDeProduit[0].accompagnement.map(
                                                        (accompagnement: any) => {
                                                            switch (accompagnement.nom) {
                                                                case 'Sauce au choix':
                                                                case 'Assaisonnement':
                                                                    return (
                                                                        <>
                                                                            <Text
                                                                                key={
                                                                                    accompagnement.id
                                                                                }>
                                                                                {formatText(
                                                                                    accompagnement.nom
                                                                                )}
                                                                            </Text>
                                                                            <SauceToppingButton
                                                                                className={
                                                                                    openSauce[
                                                                                        getIndexByCategory(
                                                                                            category.id
                                                                                        )
                                                                                    ]
                                                                                        ? 'open'
                                                                                        : ''
                                                                                }
                                                                                width="15"
                                                                                height="15"
                                                                                viewBox="0 0 25 25"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                onClick={(e) => {
                                                                                    sauceToppingButtonClickHandler(
                                                                                        e,
                                                                                        getIndexByCategory(
                                                                                            category.id
                                                                                        ),
                                                                                        'sauce'
                                                                                    );
                                                                                }}>
                                                                                <circle
                                                                                    cx="12.5"
                                                                                    cy="12.5"
                                                                                    r="12.5"
                                                                                    transform="rotate(90 12.5 12.5)"
                                                                                    fill="#007A0C"
                                                                                />
                                                                                <path
                                                                                    d="M8.16277 10.6268L11.8263 16.5676C12.1864 17.1441 12.9425 17.1441 13.2936 16.5676L16.9661 10.6268C17.3802 9.93694 16.9571 9 16.228 9L8.90088 9C8.17177 9 7.7487 9.93694 8.16277 10.6268Z"
                                                                                    fill="white"
                                                                                />
                                                                            </SauceToppingButton>
                                                                            <DropDown
                                                                                className={
                                                                                    openSauce[
                                                                                        getIndexByCategory(
                                                                                            category.id
                                                                                        )
                                                                                    ]
                                                                                        ? 'open'
                                                                                        : ''
                                                                                }>
                                                                                {accompagnement.liste[0].sauces.map(
                                                                                    (
                                                                                        sauce: any
                                                                                    ) => (
                                                                                        <Text
                                                                                            key={
                                                                                                sauce.id
                                                                                            }>
                                                                                            {formatText(
                                                                                                sauce.nom
                                                                                            )}
                                                                                        </Text>
                                                                                    )
                                                                                )}
                                                                            </DropDown>
                                                                        </>
                                                                    );
                                                                case 'Toppings au choix':
                                                                case 'Petit +':
                                                                    return (
                                                                        <>
                                                                            <Text
                                                                                key={
                                                                                    accompagnement.id
                                                                                }>
                                                                                {formatText(
                                                                                    accompagnement.nom
                                                                                )}
                                                                            </Text>
                                                                            <SauceToppingButton
                                                                                className={
                                                                                    openTopping[
                                                                                        getIndexByCategory(
                                                                                            category.id
                                                                                        )
                                                                                    ]
                                                                                        ? 'open'
                                                                                        : ''
                                                                                }
                                                                                width="15"
                                                                                height="15"
                                                                                viewBox="0 0 25 25"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                onClick={(e) => {
                                                                                    sauceToppingButtonClickHandler(
                                                                                        e,
                                                                                        getIndexByCategory(
                                                                                            category.id
                                                                                        ),
                                                                                        'topping'
                                                                                    );
                                                                                }}>
                                                                                <circle
                                                                                    cx="12.5"
                                                                                    cy="12.5"
                                                                                    r="12.5"
                                                                                    transform="rotate(90 12.5 12.5)"
                                                                                    fill="#007A0C"
                                                                                />
                                                                                <path
                                                                                    d="M8.16277 10.6268L11.8263 16.5676C12.1864 17.1441 12.9425 17.1441 13.2936 16.5676L16.9661 10.6268C17.3802 9.93694 16.9571 9 16.228 9L8.90088 9C8.17177 9 7.7487 9.93694 8.16277 10.6268Z"
                                                                                    fill="white"
                                                                                />
                                                                            </SauceToppingButton>
                                                                            <DropDown
                                                                                className={
                                                                                    openTopping[
                                                                                        getIndexByCategory(
                                                                                            category.id
                                                                                        )
                                                                                    ]
                                                                                        ? 'open'
                                                                                        : ''
                                                                                }>
                                                                                {accompagnement.liste[0].toppings.map(
                                                                                    (
                                                                                        topping: any
                                                                                    ) => (
                                                                                        <Text
                                                                                            key={
                                                                                                topping.id
                                                                                            }>
                                                                                            {formatText(
                                                                                                topping.nom
                                                                                            )}
                                                                                        </Text>
                                                                                    )
                                                                                )}
                                                                            </DropDown>
                                                                        </>
                                                                    );
                                                                default: {
                                                                    return (
                                                                        <Text
                                                                            key={accompagnement.id}>
                                                                            {formatText(
                                                                                accompagnement.nom
                                                                            )}
                                                                        </Text>
                                                                    );
                                                                }
                                                            }
                                                        }
                                                    )}
                                                </AccompagnementContainer>
                                            </SaleWrapper>
                                            <SaleWrapper>
                                                <ProdutTypeTitle>Présentation</ProdutTypeTitle>
                                                <Text>{formatText(product.presentation)}</Text>
                                                <ImageContainer>
                                                    <Img
                                                        src={product.image.url}
                                                        alt={product.image.alt || 'img du site'}
                                                    />
                                                    <Price>{product.prix + ' €'}</Price>
                                                    {product.sousCategorie && (
                                                        <SousCategorie className="sousCategorie">
                                                            {product.sousCategorie.nom}
                                                        </SousCategorie>
                                                    )}
                                                </ImageContainer>
                                            </SaleWrapper>
                                        </CategoryContainer>
                                    );
                                case 'ProduitSucreRecord':
                                case 'ProduitCollationRecord':
                                    return (
                                        <CategoryContainer
                                            key={product.id}
                                            className={
                                                displayedMenus[getIndexByCategory(category.id)]
                                                    .displayedId === product.id
                                                    ? 'displayed'
                                                    : ''
                                            }>
                                            <SucreWrapper>
                                                <ProdutTypeTitle>Composition</ProdutTypeTitle>
                                                {product.typeDeProduit[0].__typename ===
                                                    'ProduitSucreRecord' &&
                                                    product.typeDeProduit[0].fruit.map(
                                                        (fruit: any) => {
                                                            if (fruit.nom === 'Toppings au choix') {
                                                                return (
                                                                    <>
                                                                        <Text key={fruit.id}>
                                                                            {formatText(fruit.nom)}
                                                                        </Text>
                                                                        <ToppingSucresButton
                                                                            className={
                                                                                openToppingSucres[
                                                                                    getIndexByCategory(
                                                                                        category.id
                                                                                    )
                                                                                ]
                                                                                    ? 'open'
                                                                                    : ''
                                                                            }
                                                                            width="15"
                                                                            height="15"
                                                                            viewBox="0 0 25 25"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            onClick={(e) => {
                                                                                sauceToppingButtonClickHandler(
                                                                                    e,
                                                                                    getIndexByCategory(
                                                                                        category.id
                                                                                    ),
                                                                                    'sauce'
                                                                                );
                                                                            }}>
                                                                            <circle
                                                                                cx="12.5"
                                                                                cy="12.5"
                                                                                r="12.5"
                                                                                transform="rotate(90 12.5 12.5)"
                                                                                fill="#007A0C"
                                                                            />
                                                                            <path
                                                                                d="M8.16277 10.6268L11.8263 16.5676C12.1864 17.1441 12.9425 17.1441 13.2936 16.5676L16.9661 10.6268C17.3802 9.93694 16.9571 9 16.228 9L8.90088 9C8.17177 9 7.7487 9.93694 8.16277 10.6268Z"
                                                                                fill="white"
                                                                            />
                                                                        </ToppingSucresButton>
                                                                        <DropDown
                                                                            className={
                                                                                openSauce[
                                                                                    getIndexByCategory(
                                                                                        category.id
                                                                                    )
                                                                                ]
                                                                                    ? 'open'
                                                                                    : ''
                                                                            }>
                                                                            {fruit.liste[0].toppingsSucres.map(
                                                                                (topping: any) => (
                                                                                    <Text
                                                                                        key={
                                                                                            topping.id
                                                                                        }>
                                                                                        {formatText(
                                                                                            topping.nom
                                                                                        )}
                                                                                    </Text>
                                                                                )
                                                                            )}
                                                                        </DropDown>
                                                                    </>
                                                                );
                                                            } else {
                                                                return (
                                                                    <Text key={fruit.id}>
                                                                        {formatText(fruit.nom)}
                                                                    </Text>
                                                                );
                                                            }
                                                        }
                                                    )}
                                                {product.typeDeProduit[0].__typename ===
                                                    'ProduitCollationRecord' &&
                                                    product.typeDeProduit[0].composition.map(
                                                        (fruit: any) => (
                                                            <Text key={fruit.id}>
                                                                {formatText(fruit.nom)}
                                                            </Text>
                                                        )
                                                    )}
                                            </SucreWrapper>
                                            <SucreWrapper>
                                                <ProdutTypeTitle>Présentation</ProdutTypeTitle>
                                                <Text>{formatText(product.presentation)}</Text>
                                                <ImageContainer>
                                                    <Img
                                                        src={product.image.url}
                                                        alt={product.image.alt || 'img du site'}
                                                    />
                                                    <Price>{product.prix + ' €'}</Price>
                                                    {product.sousCategorie && (
                                                        <SousCategorie className="sousCategorie">
                                                            {product.sousCategorie.nom}
                                                        </SousCategorie>
                                                    )}
                                                </ImageContainer>
                                            </SucreWrapper>
                                        </CategoryContainer>
                                    );
                            }
                        })}
                    </Container>
                </CarteWrapper>
            ))}
        </CarteContainer>
    );
}

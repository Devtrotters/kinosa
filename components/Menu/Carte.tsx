import formatText from 'lib/formatText';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MenuLink, MenuText, MenuWrapper, Square } from 'styles/Concept/Concept.style';
import {
    CarteButton,
    CarteButtonContainer,
    CarteContainer,
    CarteSection,
    CarteTitle,
    CarteWrapper,
    CategoryContainer,
    Container,
    ImageContainer,
    Img,
    Menu,
    MenuButton,
    MenuContainer,
    Price,
    ProdutTypeTitle,
    SaleWrapper,
    SousCategorie,
    SucreWrapper
} from 'styles/Menu/Carte.style';
import { Text } from 'styles/UI/Texts.style';

export default function Carte({ categories, products }) {
    const [carte, setCarte] = useState([]);
    const [displayedMenus, setDisplayedMenus] = useState([]);
    const [selected, setSelected] = useState(
        categories[0].slug !== 'formules' ? categories[0].slug : categories[1].slug
    );

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
                    carteTemp[categoryId].produits.push(product);
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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelected(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '0px 0px -80% 0px',
                threshold: 0.25
            }
        );
        const setObserver = () => {
            categories.forEach((element: any) => {
                if (element.nom !== 'Formules') {
                    observer.observe(document.getElementById(element.slug));
                }
            });
        };
        const timer = setTimeout(() => setObserver(), 200);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

    const getIndexByCategory = (id: any) => {
        const found = false;
        for (let i = 0; i < displayedMenus.length && !found; i++)
            if (id === displayedMenus[i].categoryId) {
                return i;
            }
    };

    const clickHandler = (e: any, catId: any, id: any) => {
        e.preventDefault();
        const displayedMenuIndex = getIndexByCategory(catId);
        const displayedMenusCopy = [...displayedMenus];
        displayedMenusCopy.splice(displayedMenuIndex, 1, { categoryId: catId, displayedId: id });
        setDisplayedMenus(displayedMenusCopy);
    };
    return (
        <CarteSection>
            <MenuContainer>
                <Menu>
                    {carte.map((category: any, i: number) => (
                        <Link key={category.id} href={'#' + category.slug}>
                            <MenuLink>
                                <MenuWrapper>
                                    <Square
                                        id={category.slug + 'square'}
                                        className={selected === category.slug ? 'displayed' : ''}
                                    />
                                    <MenuText
                                        id={category.name + 'text'}
                                        className={selected === category.slug ? 'displayed' : ''}>
                                        {formatText(category.name)}
                                    </MenuText>
                                </MenuWrapper>
                            </MenuLink>
                        </Link>
                    ))}
                    <MenuButton href="#commandes">Commandes</MenuButton>
                </Menu>
            </MenuContainer>
            <CarteContainer>
                {carte.map((category) => (
                    <CarteWrapper id={category.slug} key={category.id}>
                        <article>
                            <CarteTitle>{formatText(category.name)}</CarteTitle>
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
                                        onClick={(e) => clickHandler(e, category.id, product.id)}
                                    />
                                ))}
                            </CarteButtonContainer>
                        </article>
                        <Container>
                            {category.produits.map((product: any, i: number) => {
                                switch (product.typeDeProduit[0].__typename) {
                                    case 'ProduitSaleRecord':
                                        return (
                                            <CategoryContainer
                                                key={i}
                                                className={
                                                    displayedMenus[getIndexByCategory(category.id)]
                                                        .displayedId === product.id
                                                        ? 'displayed'
                                                        : ''
                                                }>
                                                <SaleWrapper>
                                                    <ProdutTypeTitle>Base</ProdutTypeTitle>
                                                    {product.typeDeProduit[0].base.map((base) => (
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
                                                    <ProdutTypeTitle>
                                                        Accompagnement(s)
                                                    </ProdutTypeTitle>
                                                    {product.typeDeProduit[0].accompagnement.map(
                                                        (accompagnement: any) => (
                                                            <Text key={accompagnement.id}>
                                                                {formatText(accompagnement.nom)}
                                                            </Text>
                                                        )
                                                    )}
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
                                                            <SousCategorie>
                                                                {product.sousCategorie.nom}
                                                            </SousCategorie>
                                                        )}
                                                    </ImageContainer>
                                                </SaleWrapper>
                                            </CategoryContainer>
                                        );
                                    case 'ProduitSucreRecord':
                                        return (
                                            <CategoryContainer
                                                key={i}
                                                className={
                                                    displayedMenus[getIndexByCategory(category.id)]
                                                        .displayedId === product.id
                                                        ? 'displayed'
                                                        : ''
                                                }>
                                                <SucreWrapper>
                                                    <ProdutTypeTitle>Composition</ProdutTypeTitle>
                                                    {product.typeDeProduit[0].fruit.map((fruit) => (
                                                        <Text key={fruit.id}>
                                                            {formatText(fruit.nom)}
                                                        </Text>
                                                    ))}
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
                                                            <SousCategorie>
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
        </CarteSection>
    );
}

import SocialLogo from 'components/SocialLogo';
import formatText from 'lib/formatText';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
    DisplayMobileButton,
    HeaderMobileMenu,
    MenuContainer,
    MobileButtonContainer,
    MobileMenu,
    NavButton,
    NavButtonContainer,
    NavButtonPhone,
    NavContainer,
    NavText,
    PhoneMobileButton,
    SocialLogoContainer
} from 'styles/Navbar.style';

export default function Navbar({ data, social }) {
    const [buttonText, setButtonText] = useState('Blog');
    const router = useRouter();

    const [displayMenu, setDisplayMenu] = useState(false);

    return (
        <header>
            <MobileMenu className={`${router.pathname === '/contact' ? 'contact' : ''}`}>
                <Link href="/">
                    <a>
                        <svg
                            width="50"
                            height="51"
                            viewBox="0 0 50 51"
                            fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M38.0295 50.273C44.6279 50.273 49.977 44.9014 49.977 38.2752C49.977 31.6489 44.6279 26.2773 38.0295 26.2773C31.4311 26.2773 26.082 31.6489 26.082 38.2752C26.082 44.9014 31.4311 50.273 38.0295 50.273Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M23.895 26.2773H11.9475C11.9475 26.2773 0 27.4859 0 39.4837V50.2949H11.3567C11.3567 50.2949 23.9169 50.2949 23.9169 38.2971V26.2773H23.895Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M49.9771 0.0842285H38.0296C38.0296 0.0842285 26.0822 1.2928 26.0822 13.2906V24.1018H37.4388C37.4388 24.1018 49.999 24.1018 49.999 12.104V0.0842285H49.9771Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M0 0.0842285V12.082C0 12.082 1.2035 24.0798 13.151 24.0798H23.9169V12.6973C23.9169 12.6973 23.9169 0.0842285 11.9694 0.0842285H0Z"
                                fill="#007A0C"
                            />
                        </svg>
                    </a>
                </Link>
                <NavContainer className={displayMenu ? 'open' : ''}>
                    <HeaderMobileMenu>
                        <h1>
                            Kinosa <br /> Healthy bar & traiteur
                        </h1>
                        <DisplayMobileButton
                            style={{ position: 'absolute' }}
                            onClick={() => {
                                setDisplayMenu(false);
                                const r = document.querySelector(':root') as HTMLElement;
                                r.style.setProperty('--body-height', '100%');
                                r.style.overflow = 'auto';
                            }}
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.5938 0L12.5 8.09375L4.40625 0L0 4.40625L8.09375 12.5L0 20.5938L4.40625 25L12.5 16.9062L20.5938 25L25 20.5938L16.9062 12.5L25 4.40625L20.5938 0Z"
                                fill="white"
                            />
                        </DisplayMobileButton>
                    </HeaderMobileMenu>
                    {data.map((el: any) => {
                        if (el.slug.startsWith('/')) {
                            return (
                                <Link key={el.id} href={el.slug}>
                                    <NavText
                                        className={`${router.pathname === el.slug ? 'active' : ''}`}
                                        onClick={() => {
                                            setDisplayMenu(false);
                                            const r = document.querySelector(
                                                ':root'
                                            ) as HTMLElement;
                                            r.style.setProperty('--body-height', '100%');
                                            r.style.overflow = 'auto';
                                        }}>
                                        {el.titre}
                                    </NavText>
                                </Link>
                            );
                        } else {
                            return (
                                <NavText
                                    key={el.id}
                                    className={`${router.pathname === el.slug ? 'active' : ''}`}
                                    href={el.slug}>
                                    {el.titre}
                                </NavText>
                            );
                        }
                    })}

                    <NavButton href="/contact">Commande & Contact</NavButton>
                    <SocialLogoContainer>
                        {/* display : grid */}
                        {social.map((el: any) => (
                            <a key={el.id} href={el.lien} target="_blank" rel="noreferrer">
                                <SocialLogo name={el.nom} isMenu isFooter={false} />
                            </a>
                        ))}
                    </SocialLogoContainer>
                </NavContainer>
                <MobileButtonContainer>
                    <PhoneMobileButton href="tel:+33646193773">
                        <DisplayMobileButton
                            width="22"
                            height="23"
                            viewBox="0 0 22 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.2008 1.42506L16.7321 0.375825C16.2466 0.262158 15.7482 0.520095 15.5505 0.983507L13.4881 5.87994C13.3076 6.30837 13.4279 6.81113 13.7845 7.10404L16.3884 9.27246C14.8416 12.6256 12.1389 15.4149 8.77449 17.0193L6.64328 14.37C6.3511 14.0071 5.86127 13.8847 5.44018 14.0683L0.627779 16.1668C0.168022 16.3723 -0.0854882 16.8794 0.0262283 17.3734L1.05746 21.9201C1.16488 22.3923 1.57737 22.7333 2.06291 22.7333C13.067 22.7333 22 13.6618 22 2.44806C22 1.95842 21.6691 1.53436 21.2008 1.42506Z"
                                fill="#F9BB42"
                            />
                        </DisplayMobileButton>
                    </PhoneMobileButton>

                    <DisplayMobileButton
                        onClick={() => {
                            setDisplayMenu(true);
                            const r = document.querySelector(':root') as HTMLElement;
                            r.style.setProperty('--body-height', '100vh');
                            r.style.overflow = 'hidden';
                        }}
                        width="30"
                        height="20"
                        viewBox="0 0 30 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="5" fill="#007A0C" />
                        <rect y="15" width="30" height="5" fill="#007A0C" />
                    </DisplayMobileButton>
                </MobileButtonContainer>
            </MobileMenu>
            <MenuContainer className={`${router.pathname === '/contact' ? 'contact' : ''}`}>
                <Link href="/">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                    <a
                        onClick={() => {
                            const r = document.querySelector(':root') as HTMLElement;
                            r.style.setProperty('--body-height', '100%');
                            r.style.overflow = 'auto';
                        }}>
                        <svg
                            width="181"
                            height="51"
                            viewBox="0 0 181 51"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M116.732 48.4C117.767 48.4 118.606 47.6135 118.606 46.6435C118.606 45.6734 117.767 44.887 116.732 44.887C115.697 44.887 114.858 45.6734 114.858 46.6435C114.858 47.6135 115.697 48.4 116.732 48.4Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M21.7099 26.9592C25.4767 26.9592 28.5302 24.0966 28.5302 20.5655C28.5302 17.0344 25.4767 14.1719 21.7099 14.1719C17.9432 14.1719 14.8896 17.0344 14.8896 20.5655C14.8896 24.0966 17.9432 26.9592 21.7099 26.9592Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M13.6406 14.1719H6.82029C6.82029 14.1719 0 14.8159 0 21.2096V26.9709H6.48303C6.48303 26.9709 13.6531 26.9709 13.6531 20.5772V14.1719H13.6406Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M28.5302 0.213623H21.7099C21.7099 0.213623 14.8896 0.857672 14.8896 7.25132V13.0126H21.3727C21.3727 13.0126 28.5427 13.0126 28.5427 6.61898V0.213623H28.5302Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M0 0.213623V6.60727C0 6.60727 0.687026 13.0009 7.50732 13.0009H13.6531V6.93515C13.6531 6.93515 13.6531 0.213623 6.83278 0.213623H0Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M52.9636 38.9967H48.6416L37.162 27.0291V38.9967H33.627V14.0779H37.162V25.3546L48.2419 14.0779H52.5639L40.847 26.186L52.9636 38.9967Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M55.4863 14.0779H59.0214V38.985H55.4863V14.0779Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M79.8446 14.0779H83.3797V38.985H80.5317L66.8661 20.3778V38.985H63.3311V14.0779H66.0667L79.8446 32.7904V14.0779Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M110.686 35.6834C108.013 38.2011 104.753 39.454 100.906 39.454C97.0582 39.454 93.8105 38.2011 91.1498 35.6834C88.4891 33.1658 87.165 30.1212 87.165 26.5379C87.165 22.9313 88.4891 19.8749 91.1498 17.369C93.8105 14.8631 97.0582 13.6101 100.906 13.6101C104.753 13.6101 108.013 14.8631 110.686 17.369C113.359 19.8749 114.696 22.9313 114.696 26.5379C114.696 30.1212 113.359 33.1658 110.686 35.6834ZM93.6106 33.4234C95.5717 35.2853 98.0076 36.2221 100.918 36.2221C103.829 36.2221 106.264 35.297 108.226 33.4234C110.187 31.5615 111.173 29.2663 111.173 26.5379C111.173 23.7861 110.187 21.4792 108.226 19.6173C106.264 17.7554 103.829 16.8186 100.918 16.8186C98.0076 16.8186 95.5717 17.7554 93.6106 19.6173C91.6494 21.4792 90.6626 23.7861 90.6626 26.5379C90.6626 29.2663 91.6494 31.5615 93.6106 33.4234Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M126.325 39.454C123.839 39.454 121.728 38.9037 119.967 37.8146C118.206 36.7256 116.969 35.2267 116.27 33.3297L119.305 31.6903C120.342 34.6998 122.703 36.2104 126.4 36.2104C128.224 36.2104 129.61 35.8591 130.572 35.1565C131.534 34.4539 132.009 33.5288 132.009 32.3578C132.009 31.1751 131.521 30.2851 130.572 29.6879C129.61 29.0907 127.999 28.4701 125.75 27.8026C124.651 27.4513 123.802 27.1703 123.215 26.9829C122.628 26.7955 121.891 26.4911 121.029 26.0812C120.154 25.6714 119.505 25.2381 119.068 24.8048C118.643 24.3716 118.256 23.7861 117.906 23.0835C117.569 22.3692 117.394 21.5612 117.394 20.6595C117.394 18.5049 118.206 16.7835 119.83 15.5188C121.453 14.2542 123.427 13.6101 125.75 13.6101C127.849 13.6101 129.685 14.1136 131.234 15.109C132.796 16.1043 133.957 17.4276 134.744 19.0552L131.784 20.6595C130.647 18.095 128.636 16.8186 125.75 16.8186C124.314 16.8186 123.14 17.1465 122.253 17.814C121.366 18.4815 120.929 19.3831 120.929 20.519C120.929 21.608 121.341 22.4394 122.178 23.0132C123.015 23.587 124.451 24.1725 126.512 24.7931C127.237 25.0273 127.749 25.203 128.061 25.3084C128.374 25.4138 128.848 25.566 129.498 25.7885C130.147 25.9993 130.622 26.1866 130.922 26.3271C131.222 26.4677 131.634 26.6667 132.159 26.9361C132.683 27.2054 133.058 27.4513 133.32 27.6855C133.57 27.9197 133.87 28.2125 134.207 28.5638C134.544 28.9033 134.794 29.2546 134.944 29.6177C135.094 29.969 135.231 30.3788 135.344 30.8472C135.456 31.3156 135.519 31.8074 135.519 32.3227C135.519 34.5007 134.669 36.2455 132.97 37.5336C131.272 38.81 129.061 39.454 126.325 39.454Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M156.03 38.997L153.856 33.4113H141.902L139.729 38.997H135.969L145.874 14.0898H149.859L159.765 38.997H156.03ZM143.114 30.3082H152.657L147.886 18.0127L143.114 30.3082Z"
                                fill="#007A0C"
                            />
                            <path
                                d="M39.1353 42.5452H40.3094V50.7422H39.1353V47.0535H34.7882V50.7422H33.6016V42.5452H34.7882V46.023H39.1353V42.5452Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M42.7953 49.7117H46.9424V50.7422H41.6086V42.5452H46.88V43.5756H42.7953V46.0933H46.5677V47.1121H42.7953V49.7117Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M54.8995 50.7422L54.175 48.9037H50.1528L49.4283 50.7422H48.1666L51.5018 42.5452H52.8384L56.1736 50.7422H54.8995ZM50.5525 47.8849H53.7628L52.1514 43.8333L50.5525 47.8849Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M58.5346 49.7117H62.3944V50.7422H57.3479V42.5452H58.5346V49.7117Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M67.5157 42.5452V43.5756H64.8676V50.7422H63.7059V43.5756H61.0702V42.5452H67.5157Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M73.9738 42.5452H75.148V50.7422H73.9738V47.0535H69.6268V50.7422H68.4526V42.5452H69.6393V46.023H73.9863V42.5452H73.9738Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M83.3548 42.5452L80.182 47.4282V50.7422H78.9954V47.4165L75.8475 42.5452H77.1716L79.6074 46.3977L82.0307 42.5452H83.3548Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M90.8497 46.4914C91.2619 46.6671 91.5867 46.9247 91.824 47.2643C92.0614 47.6039 92.1863 47.9903 92.1863 48.4236C92.1863 49.0793 91.9365 49.6297 91.4368 50.0747C90.9371 50.5197 90.3251 50.7422 89.6006 50.7422H85.7407V42.5452H89.3133C90.0128 42.5452 90.5999 42.7559 91.087 43.1892C91.5742 43.6225 91.8115 44.1494 91.8115 44.7818C91.824 45.5078 91.4993 46.0699 90.8497 46.4914ZM89.3133 43.5639H86.9274V46.0699H89.3133C89.688 46.0699 90.0003 45.9528 90.2626 45.7069C90.5124 45.461 90.6498 45.1682 90.6498 44.8169C90.6498 44.4773 90.5249 44.1846 90.2626 43.9387C90.0003 43.681 89.688 43.5639 89.3133 43.5639ZM89.6006 49.7234C90.0003 49.7234 90.3376 49.5946 90.6124 49.337C90.8872 49.0793 91.0246 48.7632 91.0246 48.3884C91.0246 48.0254 90.8872 47.7093 90.6124 47.4516C90.3376 47.194 90.0003 47.0652 89.6131 47.0652H86.9399V49.7234H89.6006Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M98.7443 50.7422L98.0198 48.9037H93.9976L93.2731 50.7422H92.0115L95.3467 42.5452H96.6832L100.018 50.7422H98.7443ZM94.3973 47.8849H97.6076L95.9962 43.8333L94.3973 47.8849Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M105.989 50.7422L103.991 47.6039H101.88V50.7422H100.693V42.5452H104.265C105.027 42.5452 105.689 42.7911 106.227 43.2946C106.776 43.7864 107.039 44.3953 107.039 45.0979C107.039 45.6249 106.864 46.1167 106.526 46.55C106.177 46.9833 105.739 47.2994 105.19 47.4751L107.301 50.7539H105.989V50.7422ZM101.88 43.5639V46.6202H104.265C104.703 46.6202 105.09 46.468 105.39 46.1753C105.702 45.8708 105.852 45.5078 105.852 45.0862C105.852 44.6647 105.702 44.3017 105.39 44.0089C105.077 43.7162 104.703 43.5639 104.265 43.5639H101.88Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M132.459 42.5452V43.5874H129.836V50.8475H128.674V43.5874H126.063V42.5452H132.459Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M138.88 50.8475L136.894 47.6741H134.807V50.8475H133.633V42.5452H137.181C137.943 42.5452 138.592 42.7911 139.13 43.2946C139.667 43.7981 139.941 44.407 139.941 45.1096C139.941 45.6483 139.767 46.1401 139.429 46.5851C139.092 47.0301 138.642 47.3345 138.105 47.5219L140.191 50.8475H138.88ZM134.807 43.5756V46.6671H137.168C137.606 46.6671 137.98 46.5148 138.293 46.2104C138.605 45.9059 138.755 45.5429 138.755 45.1096C138.755 44.6881 138.605 44.3134 138.293 44.0206C137.98 43.7162 137.606 43.5756 137.168 43.5756H134.807Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M147.186 50.8475L146.462 48.9856H142.477L141.753 50.8475H140.503L143.801 42.5452H145.125L148.423 50.8475H147.186ZM142.889 47.9552H146.075L144.488 43.8567L142.889 47.9552Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M149.497 42.5452H150.671V50.8475H149.497V42.5452Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M158.241 42.5452V43.5874H155.618V50.8475H154.456V43.5874H151.846V42.5452H158.241Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M160.577 49.8053H164.687V50.8475H159.403V42.5452H164.624V43.5874H160.577V46.1401H164.312V47.1706H160.577V49.8053Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M171.707 50.2035C171.095 50.7422 170.295 50.9998 169.321 50.9998C168.347 50.9998 167.547 50.7304 166.923 50.2035C166.298 49.6648 165.998 48.9505 165.998 48.0606V42.5452H167.173V48.0137C167.173 48.5992 167.36 49.0676 167.735 49.4072C168.109 49.7468 168.634 49.9225 169.334 49.9225C170.021 49.9225 170.558 49.7468 170.932 49.4072C171.307 49.0676 171.495 48.5992 171.495 48.0137V42.5452H172.656V48.0606C172.631 48.9505 172.332 49.6648 171.707 50.2035Z"
                                fill="#F9BB42"
                            />
                            <path
                                d="M179.689 50.8475L177.703 47.6741H175.617V50.8475H174.443V42.5452H177.99C178.752 42.5452 179.402 42.7911 179.939 43.2946C180.476 43.7981 180.751 44.407 180.751 45.1096C180.751 45.6483 180.576 46.1401 180.239 46.5851C179.901 47.0301 179.452 47.3345 178.915 47.5219L181.001 50.8475H179.689ZM175.604 43.5756V46.6671H177.965C178.402 46.6671 178.777 46.5148 179.089 46.2104C179.402 45.9059 179.552 45.5429 179.552 45.1096C179.552 44.6881 179.402 44.3134 179.089 44.0206C178.777 43.7162 178.402 43.5756 177.965 43.5756H175.604Z"
                                fill="#F9BB42"
                            />
                        </svg>
                    </a>
                </Link>
                <NavContainer>
                    {data.map((el: any) => {
                        if (el.slug.startsWith('/')) {
                            return (
                                <Link key={el.id} href={el.slug}>
                                    <NavText
                                        className={`${router.pathname === el.slug ? 'active' : ''}`}
                                        onClick={() => {
                                            setDisplayMenu(false);
                                            const r = document.querySelector('body') as HTMLElement;
                                            r.style.setProperty('height', '100%');
                                            r.style.overflow = 'auto';
                                        }}>
                                        {el.titre}
                                    </NavText>
                                </Link>
                            );
                        } else {
                            return (
                                <NavText
                                    className={`${router.pathname === el.slug ? 'active' : ''}`}
                                    href={el.slug}>
                                    {el.titre}
                                </NavText>
                            );
                        }
                    })}
                    <NavButtonContainer>
                        <NavButtonPhone href="tel:+33646193773">
                            <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.5641 0.661492L9.12662 0.0806995C8.86178 0.0177803 8.58991 0.160558 8.4821 0.417075L7.35713 3.12744C7.25869 3.3646 7.32431 3.6429 7.51884 3.80503L8.93912 5.00534C8.09539 6.86146 6.6212 8.4054 4.78608 9.29353L3.62361 7.82703C3.46424 7.62617 3.19705 7.55841 2.96737 7.66005L0.342425 8.82163C0.0916485 8.93537 -0.0466299 9.21609 0.0143063 9.48954L0.576795 12.0063C0.635387 12.2677 0.860383 12.4564 1.12522 12.4564C7.12744 12.4564 12 7.43499 12 1.22777C12 0.956729 11.8195 0.721992 11.5641 0.661492Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <span>06 46 19 37 73</span>
                        </NavButtonPhone>
                        <NavButton href="/contact">Commande & Contact</NavButton>
                    </NavButtonContainer>
                </NavContainer>
            </MenuContainer>
        </header>
    );
}

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
                                r.style.removeProperty('overflow');
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
                                            r.style.removeProperty('overflow');
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
                    <PhoneMobileButton href="tel:+33467659404">
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
                            r.style.removeProperty('overflow');
                        }}>
                        <svg
                            viewBox="7.0529 410.9306 1078.1439 196.5411"
                            width="200"
                            height="51"
                            xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(3.3499999046325684, 0, 0, 3.3499999046325684, 546.1918334960938, 508.7371826171875)">
                                <g fill="#152f1b">
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -73.021 -19.72 L -77.374 -15.794 L -58.466 3.455 L -67.259 3.455 L -72.295 -1.965 L -73.916 -3.545 L -82.069 -11.655 L -83.136 -10.629 L -83.136 -5.423 L -83.136 3.455 L -89.495 3.455 L -89.495 -5.423 L -89.495 -20.532 L -89.495 -29.196 L -83.136 -29.196 L -83.136 -20.532 L -83.136 -14.727 L -75.795 -21.47 L -67.344 -29.196 L -63.033 -29.196 L -73.021 -19.72"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -38.368 3.455 L -38.368 -29.196 L -32.051 -29.196 L -32.051 3.455 L -38.368 3.455"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 14.213 3.455 L -5.89 -23.006 L -5.89 2.687 L -8.834 2.687 L -8.834 -4.996 L -8.834 -20.916 L -8.834 -29.196 L -2.731 -29.196 L 13.275 -7.812 L 13.275 -22.879 L 13.275 -29.196 L 16.475 -29.196 L 16.475 -22.537 L 16.475 3.455 L 14.213 3.455"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 55.285 -26.208 C 52.085 -26.208 50.591 -25.184 48.841 -22.965 C 47.134 -20.83 46.194 -17.502 46.194 -12.934 C 46.194 -8.283 47.134 -4.953 48.841 -2.819 C 50.591 -0.6 52.169 0.425 55.627 0.425 C 58.658 0.425 60.535 -0.642 62.327 -2.819 C 63.993 -4.91 64.505 -8.154 64.505 -12.891 C 64.505 -17.502 64.036 -20.703 62.327 -22.879 C 60.621 -25.099 58.615 -26.208 55.285 -26.208 Z M 55.328 3.455 C 50.335 3.455 47.262 1.919 44.104 -1.069 C 40.859 -4.142 39.28 -8.154 39.28 -13.106 C 39.28 -17.886 40.902 -21.855 44.19 -24.8 C 47.389 -27.702 50.419 -29.196 55.285 -29.196 C 60.151 -29.196 63.224 -27.745 66.468 -24.885 C 69.797 -21.897 71.461 -17.886 71.461 -12.934 C 71.461 -8.112 69.883 -4.142 66.681 -1.112 C 63.565 1.919 60.45 3.455 55.328 3.455"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 101.231 3.412 C 98.074 3.071 94.148 0.681 91.929 -2.947 L 94.063 -5.252 C 96.922 -1.112 98.46 -0.001 101.191 0.425 C 102.982 0.681 104.39 0.253 105.416 -0.599 C 106.524 -1.496 107.08 -2.519 107.207 -3.715 C 107.336 -4.953 107.037 -5.977 106.312 -6.874 C 105.543 -7.812 104.007 -8.965 101.49 -10.374 C 99.225 -11.654 97.52 -12.72 96.325 -13.659 C 95.088 -14.641 94.191 -15.879 93.594 -17.289 C 92.953 -18.738 92.738 -20.233 92.91 -21.727 C 93.165 -24.073 94.191 -25.995 96.026 -27.403 C 97.819 -28.769 99.994 -29.324 102.426 -29.067 C 103.751 -28.939 105.03 -28.556 106.184 -28.001 C 107.421 -27.403 108.574 -26.294 110.152 -24.118 L 107.678 -22.069 C 106.866 -23.348 106.654 -23.69 106.355 -23.988 C 105.289 -25.268 103.964 -25.952 102.386 -26.122 C 100.805 -26.294 99.782 -25.952 99.141 -25.354 C 98.373 -24.671 97.989 -23.86 97.903 -23.006 C 97.775 -21.94 98.074 -21.001 98.842 -20.147 C 99.61 -19.207 101.231 -18.013 103.708 -16.562 C 106.141 -15.111 107.89 -14.001 109 -13.191 C 110.195 -12.294 111.135 -11.099 111.731 -9.69 C 112.372 -8.197 112.584 -6.617 112.415 -4.867 C 112.116 -2.136 110.92 0.04 108.873 1.62 C 106.781 3.198 104.221 3.753 101.231 3.412"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 144.253 -20.189 L 140.454 -10.758 L 148.179 -10.758 L 144.253 -20.189 Z M 153.982 3.455 C 152.148 -1.155 151.421 -2.777 151.421 -2.777 L 149.33 -7.856 L 139.387 -7.856 L 135.033 3.455 L 131.363 3.455 L 144.849 -29.196 L 146.984 -29.196 L 160.897 3.455 L 153.982 3.455"
                                        strokeLinecap="round"
                                    />
                                </g>
                                <g transform="matrix(0.13 0 0 -0.13 -35.21 -12.87)" id="path14" />
                                <g transform="matrix(0.13 0 0 -0.13 3.82 -12.87)" id="path16" />
                                <g transform="matrix(0.13 0 0 -0.13 55.37 -12.87)" id="path18" />
                                <g transform="matrix(0.13 0 0 -0.13 102.2 -12.81)" id="path20" />
                                <g transform="matrix(0.13 0 0 -0.13 146.13 -12.87)" id="path22" />
                                <g fill="#007A0C">
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -118.52 0.858 C -125.717 0.858 -131.572 6.713 -131.572 13.91 C -131.572 17.396 -130.215 20.672 -127.751 23.138 C -125.285 25.603 -122.007 26.962 -118.521 26.962 C -111.324 26.962 -105.469 21.107 -105.469 13.91 C -105.468 6.713 -111.323 0.858 -118.52 0.858"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -160.937 26.996 L -148.638 26.996 C -148.079 26.993 -134.804 26.774 -134.803 13.944 L -134.803 0.865 L -147.758 0.865 C -149.041 1.026 -160.936 2.862 -160.937 15.453 L -160.937 26.996"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -131.586 -2.064 L -119.289 -2.064 C -118.73 -2.067 -105.454 -2.286 -105.454 -15.116 L -105.454 -28.195 L -118.407 -28.195 C -119.691 -28.034 -131.585 -26.198 -131.586 -13.607 L -131.586 -2.064"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -160.936 -15.256 C -160.775 -13.972 -158.939 -2.078 -146.347 -2.078 L -134.804 -2.078 L -134.804 -14.346 C -134.807 -14.905 -135.027 -28.181 -147.855 -28.181 L -160.936 -28.181 L -160.936 -15.256"
                                        strokeLinecap="round"
                                    />
                                </g>
                                <g fill="#F9BB42">
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -87.86 20.502 L -85.086 20.502 C -84.101 20.502 -83.375 19.744 -83.375 18.743 C -83.375 17.744 -84.101 17.001 -85.086 17.001 L -87.86 17.001 L -87.86 20.502 Z M -81.181 24.519 L -81.181 26.326 L -81.81 26.326 C -83.262 26.326 -84.343 25.713 -85.037 24.536 L -86.602 22.179 L -87.86 22.179 L -87.86 26.326 L -89.78 26.326 L -89.78 15.194 L -85.053 15.194 C -82.972 15.194 -81.391 16.71 -81.391 18.728 C -81.391 20.487 -82.632 21.841 -84.343 22.133 L -83.214 23.664 C -82.811 24.213 -82.262 24.519 -81.6 24.519 L -81.181 24.519"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -78.144 21.461 L -73.255 21.461 C -73.546 20.331 -74.515 19.572 -75.708 19.572 C -76.902 19.572 -77.838 20.331 -78.144 21.461 Z M -71.352 22.944 L -78.16 22.944 C -77.902 24.139 -76.918 24.929 -75.627 24.929 C -74.676 24.929 -73.852 24.494 -73.433 23.864 L -71.432 23.864 C -72.094 25.478 -73.707 26.558 -75.659 26.558 C -78.208 26.558 -80.096 24.703 -80.096 22.251 C -80.096 19.798 -78.208 17.943 -75.708 17.943 C -73.191 17.943 -71.304 19.798 -71.304 22.267 C -71.304 22.445 -71.319 22.75 -71.352 22.944"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -62.561 22.295 C -62.561 20.841 -63.643 19.728 -65.095 19.728 C -66.547 19.728 -67.644 20.841 -67.644 22.295 C -67.644 23.745 -66.547 24.859 -65.095 24.859 C -63.643 24.859 -62.561 23.745 -62.561 22.295 Z M -60.689 22.295 C -60.689 24.746 -62.432 26.601 -64.74 26.601 C -65.966 26.601 -66.982 26.037 -67.644 25.134 L -67.644 29.473 L -69.451 29.473 L -69.451 18.18 L -67.644 18.18 L -67.644 19.454 C -66.982 18.551 -65.966 17.986 -64.74 17.986 C -62.432 17.986 -60.689 19.841 -60.689 22.295"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -52.296 22.251 C -52.296 20.798 -53.377 19.685 -54.83 19.685 C -56.298 19.685 -57.379 20.798 -57.379 22.251 C -57.379 23.702 -56.298 24.816 -54.83 24.816 C -53.377 24.816 -52.296 23.702 -52.296 22.251 Z M -49.586 24.622 L -49.586 26.364 L -50.102 26.364 C -51.264 26.364 -51.99 25.881 -52.216 24.977 C -52.877 25.946 -53.927 26.558 -55.185 26.558 C -57.507 26.558 -59.234 24.703 -59.234 22.251 C -59.234 19.798 -57.507 17.943 -55.185 17.943 C -53.975 17.943 -52.958 18.507 -52.296 19.411 L -52.296 18.137 L -50.489 18.137 L -50.489 23.864 C -50.489 24.331 -50.215 24.622 -49.731 24.622 L -49.586 24.622"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -41.599 23.205 C -41.599 21.818 -43.341 21.463 -44.164 19.979 L -45.777 23.624 C -45.309 24.334 -44.421 24.818 -43.454 24.818 C -42.357 24.818 -41.599 24.189 -41.599 23.205 Z M -39.742 23.238 C -39.742 25.221 -41.016 26.56 -43.115 26.56 C -44.486 26.56 -45.679 25.996 -46.422 25.108 L -46.987 26.367 L -48.858 26.367 L -45.163 18.139 L -43.099 18.139 C -42.598 20.301 -39.742 20.317 -39.742 23.238"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -27.779 23.205 C -27.779 21.818 -29.521 21.463 -30.344 19.979 L -31.957 23.624 C -31.489 24.334 -30.601 24.818 -29.634 24.818 C -28.537 24.818 -27.779 24.189 -27.779 23.205 Z M -25.922 23.238 C -25.922 25.221 -27.196 26.56 -29.295 26.56 C -30.666 26.56 -31.859 25.996 -32.602 25.108 L -33.167 26.367 L -35.038 26.367 L -31.343 18.139 L -29.279 18.139 C -28.778 20.301 -25.922 20.317 -25.922 23.238"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -15.849 24.625 L -15.849 26.367 L -16.382 26.367 C -17.495 26.367 -18.205 25.931 -18.462 25.108 C -19.076 26.044 -20.012 26.56 -21.205 26.56 C -23.093 26.56 -24.351 25.302 -24.351 23.382 L -24.351 18.139 L -22.544 18.139 L -22.544 22.85 C -22.544 24.028 -21.786 24.818 -20.625 24.818 C -19.398 24.818 -18.575 24.011 -18.575 22.818 L -18.575 18.139 L -16.768 18.139 L -16.768 23.867 C -16.768 24.334 -16.478 24.625 -16.01 24.625 L -15.849 24.625"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M -5.906 24.616 L -5.906 26.358 L -6.389 26.358 C -8.438 26.358 -9.552 25.164 -9.552 23.196 C -9.552 22.325 -9.294 21.389 -8.777 20.436 L -11.747 20.05 L -12.94 26.358 L -14.715 26.358 L -13.408 19.663 C -13.828 19.404 -14.07 18.936 -14.07 18.435 C -14.07 17.726 -13.586 17.242 -12.844 17.242 C -12.102 17.242 -11.617 17.71 -11.569 18.356 L -6.213 18.968 L -6.213 19.404 C -7.164 20.76 -7.697 21.969 -7.697 22.985 C -7.697 24.019 -7.149 24.616 -6.228 24.616 L -5.906 24.616"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 13.556 24.618 L 13.556 26.36 L 13.024 26.36 C 11.588 26.36 10.83 25.635 10.83 24.264 L 10.83 21.553 C 10.83 20.423 10.12 19.681 9.007 19.681 C 7.845 19.681 7.054 20.439 7.054 21.586 L 7.054 26.36 L 5.247 26.36 L 5.247 21.553 C 5.247 20.423 4.538 19.681 3.425 19.681 C 2.263 19.681 1.472 20.439 1.472 21.586 L 1.472 26.36 L -0.335 26.36 L -0.335 18.133 L 1.472 18.133 L 1.472 19.197 C 2.069 18.375 2.94 17.939 4.022 17.939 C 5.296 17.939 6.264 18.536 6.732 19.52 C 7.346 18.503 8.33 17.939 9.604 17.939 C 11.426 17.939 12.637 19.165 12.637 21.02 L 12.637 23.861 C 12.637 24.327 12.927 24.618 13.395 24.618 L 13.556 24.618"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 16.597 21.461 L 21.485 21.461 C 21.194 20.331 20.227 19.572 19.032 19.572 C 17.839 19.572 16.903 20.331 16.597 21.461 Z M 23.388 22.944 L 16.58 22.944 C 16.839 24.139 17.823 24.929 19.113 24.929 C 20.066 24.929 20.888 24.494 21.307 23.864 L 23.308 23.864 C 22.646 25.478 21.033 26.558 19.081 26.558 C 16.532 26.558 14.645 24.703 14.645 22.251 C 14.645 19.798 16.532 17.943 19.032 17.943 C 21.549 17.943 23.436 19.798 23.436 22.267 C 23.436 22.445 23.421 22.75 23.388 22.944"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 30.843 23.205 C 30.843 21.818 29.101 21.463 28.278 19.979 L 26.664 23.624 C 27.132 24.334 28.019 24.818 28.987 24.818 C 30.085 24.818 30.843 24.189 30.843 23.205 Z M 32.699 23.238 C 32.699 25.221 31.424 26.56 29.327 26.56 C 27.955 26.56 26.761 25.996 26.018 25.108 L 25.454 26.367 L 23.582 26.367 L 27.277 18.139 L 29.342 18.139 C 29.842 20.301 32.699 20.317 32.699 23.238"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 42.772 24.625 L 42.772 26.367 L 42.239 26.367 C 41.126 26.367 40.417 25.931 40.158 25.108 C 39.544 26.044 38.61 26.56 37.415 26.56 C 35.527 26.56 34.269 25.302 34.269 23.382 L 34.269 18.139 L 36.076 18.139 L 36.076 22.85 C 36.076 24.028 36.834 24.818 37.996 24.818 C 39.222 24.818 40.045 24.011 40.045 22.818 L 40.045 18.139 L 41.852 18.139 L 41.852 23.867 C 41.852 24.334 42.143 24.625 42.611 24.625 L 42.772 24.625"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 52.716 24.616 L 52.716 26.358 L 52.231 26.358 C 50.182 26.358 49.069 25.164 49.069 23.196 C 49.069 22.325 49.326 21.389 49.843 20.436 L 46.875 20.05 L 45.68 26.358 L 43.905 26.358 L 45.213 19.663 C 44.793 19.404 44.55 18.936 44.55 18.435 C 44.55 17.726 45.035 17.242 45.777 17.242 C 46.52 17.242 47.003 17.71 47.051 18.356 L 52.407 18.968 L 52.407 19.404 C 51.456 20.76 50.924 21.969 50.924 22.985 C 50.924 24.019 51.473 24.616 52.392 24.616 L 52.716 24.616"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 55.657 21.461 L 60.545 21.461 C 60.254 20.331 59.287 19.572 58.092 19.572 C 56.899 19.572 55.963 20.331 55.657 21.461 Z M 62.448 22.944 L 55.64 22.944 C 55.899 24.139 56.883 24.929 58.173 24.929 C 59.126 24.929 59.948 24.494 60.367 23.864 L 62.368 23.864 C 61.706 25.478 60.093 26.558 58.141 26.558 C 55.592 26.558 53.705 24.703 53.705 22.251 C 53.705 19.798 55.592 17.943 58.092 17.943 C 60.609 17.943 62.496 19.798 62.496 22.267 C 62.496 22.445 62.481 22.75 62.448 22.944"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 74.722 22.209 C 74.722 20.755 73.642 19.643 72.19 19.643 C 70.722 19.643 69.641 20.755 69.641 22.209 C 69.641 23.66 70.722 24.774 72.19 24.774 C 73.642 24.774 74.722 23.66 74.722 22.209 Z M 77.434 24.58 L 77.434 26.322 L 76.917 26.322 C 75.756 26.322 75.03 25.838 74.803 24.935 C 74.143 25.903 73.093 26.516 71.835 26.516 C 69.512 26.516 67.786 24.661 67.786 22.209 C 67.786 19.756 69.512 17.901 71.835 17.901 C 73.045 17.901 74.062 18.465 74.722 19.368 L 74.722 14.705 L 76.531 14.705 L 76.531 23.822 C 76.531 24.289 76.805 24.58 77.289 24.58 L 77.434 24.58"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 80.566 21.461 L 85.454 21.461 C 85.164 20.331 84.195 19.572 83.001 19.572 C 81.807 19.572 80.871 20.331 80.566 21.461 Z M 87.358 22.944 L 80.549 22.944 C 80.808 24.139 81.792 24.929 83.083 24.929 C 84.034 24.929 84.857 24.494 85.277 23.864 L 87.278 23.864 C 86.616 25.478 85.003 26.558 83.05 26.558 C 80.501 26.558 78.613 24.703 78.613 22.251 C 78.613 19.798 80.501 17.943 83.001 17.943 C 85.519 17.943 87.406 19.798 87.406 22.267 C 87.406 22.445 87.39 22.75 87.358 22.944"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 96.149 22.295 C 96.149 20.841 95.069 19.728 93.615 19.728 C 92.164 19.728 91.067 20.841 91.067 22.295 C 91.067 23.745 92.164 24.859 93.615 24.859 C 95.069 24.859 96.149 23.745 96.149 22.295 Z M 98.021 22.295 C 98.021 24.746 96.278 26.601 93.971 26.601 C 92.744 26.601 91.729 26.037 91.067 25.134 L 91.067 29.473 L 89.26 29.473 L 89.26 18.18 L 91.067 18.18 L 91.067 19.454 C 91.729 18.551 92.744 17.986 93.971 17.986 C 96.278 17.986 98.021 19.841 98.021 22.295"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 108.331 24.625 L 108.331 26.367 L 107.799 26.367 C 106.685 26.367 105.975 25.931 105.718 25.108 C 105.104 26.044 104.168 26.56 102.975 26.56 C 101.087 26.56 99.829 25.302 99.829 23.382 L 99.829 18.139 L 101.636 18.139 L 101.636 22.85 C 101.636 24.028 102.394 24.818 103.556 24.818 C 104.782 24.818 105.605 24.011 105.605 22.818 L 105.605 18.139 L 107.412 18.139 L 107.412 23.867 C 107.412 24.334 107.702 24.625 108.17 24.625 L 108.331 24.625"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 109.859 18.096 L 111.667 18.096 L 111.667 26.324 L 109.859 26.324 L 109.859 18.096 Z M 109.617 15.562 C 109.617 14.902 110.117 14.417 110.763 14.417 C 111.424 14.417 111.924 14.902 111.924 15.562 C 111.924 16.208 111.424 16.708 110.763 16.708 C 110.117 16.708 109.617 16.208 109.617 15.562"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 119.823 23.205 C 119.823 21.818 118.079 21.463 117.256 19.979 L 115.644 23.624 C 116.111 24.334 116.999 24.818 117.966 24.818 C 119.063 24.818 119.823 24.189 119.823 23.205 Z M 121.678 23.238 C 121.678 25.221 120.404 26.56 118.305 26.56 C 116.934 26.56 115.741 25.996 114.998 25.108 L 114.434 26.367 L 112.562 26.367 L 116.257 18.139 L 118.321 18.139 C 118.822 20.301 121.678 20.317 121.678 23.238"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 134.494 24.516 L 134.494 26.323 L 127.007 26.323 L 127.007 24.952 C 127.007 21.515 132.411 21.03 132.411 18.53 C 132.411 17.546 131.686 16.917 130.734 16.917 C 129.766 16.917 129.04 17.546 129.04 18.498 L 127.088 18.498 C 127.088 16.482 128.669 14.997 130.75 14.997 C 132.799 14.997 134.381 16.449 134.381 18.45 C 134.381 21.87 129.862 22.645 128.975 24.516 L 134.494 24.516"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 142.862 20.76 C 142.862 18.454 141.878 16.856 140.491 16.856 C 139.103 16.856 138.119 18.454 138.119 20.76 C 138.119 23.067 139.103 24.665 140.491 24.665 C 141.878 24.665 142.862 23.067 142.862 20.76 Z M 136.15 20.76 C 136.15 17.356 137.942 15.001 140.491 15.001 C 143.04 15.001 144.831 17.356 144.831 20.76 C 144.831 24.164 143.04 26.52 140.491 26.52 C 137.942 26.52 136.15 24.164 136.15 20.76"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 150.441 15.194 L 150.441 26.326 L 148.521 26.326 L 148.521 17.694 C 147.909 18.244 147.054 18.582 146.2 18.582 L 146.2 16.775 C 147.312 16.775 148.41 16.179 149.087 15.194 L 150.441 15.194"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M 159.959 15.194 L 159.959 16.695 C 157.668 19.906 156.216 23.117 155.603 26.326 L 153.425 26.326 C 154.07 23.213 155.441 20.115 157.54 17.001 L 152.602 17.001 L 152.602 15.194 L 159.959 15.194"
                                        strokeLinecap="round"
                                    />
                                </g>
                            </g>
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
                                            r.style.removeProperty('overflow');
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
                        <NavButtonPhone href="tel:+33464659404">
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
                            <span>04 67 65 94 04</span>
                        </NavButtonPhone>
                        <NavButton href="/contact">Commande & Contact</NavButton>
                    </NavButtonContainer>
                </NavContainer>
            </MenuContainer>
        </header>
    );
}

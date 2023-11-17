import { HTMLAttributes } from 'react';

type IconProps = HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg viewBox="0 0 58 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.8391 33.5282C15.4821 41.4275 23.5188 46.6383 32.297 46.6383C40.2589 46.6383 47.4705 42.5631 51.5886 35.7373L52.7543 36.4403C48.3878 43.6786 40.7401 48 32.297 48C22.8776 48 14.2637 42.341 10.4671 33.7962C10.1564 33.8314 9.84396 33.8498 9.53122 33.8514C7.6137 33.8514 6.07279 33.2223 4.90994 31.9335V40.0764H0.885712V18.6348H4.87827V20.8357C5.67142 19.5229 7.34475 18.6402 9.11148 18.432C10.5001 12.7798 13.9931 7.73313 18.8193 4.42282C18.5992 3.74358 18.5998 3.01209 18.8211 2.33322C19.0423 1.65434 19.4728 1.06295 20.0508 0.643802C20.6289 0.224659 21.3248 -0.000715783 22.0388 1.70782e-06C22.7528 0.000719199 23.4483 0.227487 24.0255 0.647791C24.6027 1.0681 25.032 1.66036 25.2518 2.33967C25.4717 3.01899 25.4709 3.75048 25.2494 4.42928C25.0279 5.10808 24.5973 5.69934 24.0191 6.1183C23.4409 6.53725 22.7449 6.7624 22.0309 6.76145C21.5514 6.76115 21.0775 6.65768 20.6415 6.45807C20.2055 6.25846 19.8176 5.96738 19.504 5.60459C15.0939 8.65989 11.8721 13.254 10.5165 18.4112C12.1803 18.5435 13.648 19.2202 14.9387 20.4269C16.385 21.7786 17.1083 23.6651 17.1083 26.0859C17.1083 28.5066 16.3537 30.4244 14.8761 31.7764C13.9781 32.6169 12.9624 33.1983 11.8391 33.5282ZM20.4853 1.62858C20.0588 2.00306 19.7827 2.51949 19.708 3.08208H19.708C19.6478 3.54111 19.7251 4.00768 19.93 4.42279C20.135 4.8379 20.4585 5.1829 20.8595 5.41419C21.2605 5.64548 21.7212 5.75265 22.1831 5.72216C22.6451 5.69167 23.0876 5.5249 23.4547 5.24291C23.8219 4.96092 24.0972 4.57638 24.2458 4.13793C24.3945 3.69948 24.4097 3.22681 24.2897 2.77968C24.1697 2.33255 23.9198 1.93104 23.5716 1.62593C23.2234 1.32082 22.7926 1.12582 22.3336 1.06556C22.2319 1.05237 22.1295 1.04571 22.027 1.04563C21.4595 1.04698 20.9117 1.2541 20.4853 1.62858ZM4.94123 26.1487C4.94123 28.8837 6.63893 30.4873 9.02831 30.4873C11.449 30.4873 13.1154 28.7895 13.1154 26.0542C13.1154 23.382 11.5119 21.7472 9.15419 21.7472C6.85906 21.7472 4.94123 23.2249 4.94123 26.1487ZM56.1723 24.1244C56.173 25.6125 56.0353 27.0974 55.7609 28.56H55.7608C56.3746 28.9566 56.8215 29.5648 57.0166 30.2691C57.2117 30.9733 57.1414 31.7247 56.8191 32.3807C56.4968 33.0366 55.945 33.5513 55.2683 33.8273C54.5915 34.1032 53.8371 34.1211 53.148 33.8776C52.459 33.634 51.8834 33.146 51.5304 32.5061C51.1774 31.8662 51.0716 31.1189 51.2331 30.4062C51.3946 29.6934 51.8121 29.0648 52.4064 28.6395C53.0008 28.2143 53.7306 28.022 54.4573 28.0993C54.6917 26.7873 54.8099 25.4572 54.8106 24.1244C54.8106 11.7104 44.7111 1.61059 32.297 1.61059C30.6543 1.61014 29.0165 1.78843 27.4123 2.14232L27.1179 0.812771C28.8187 0.437394 30.5553 0.248313 32.297 0.248893C45.4618 0.248893 56.1723 10.9597 56.1723 24.1244ZM28.0026 12.85V28.6323C28.0026 32.122 30.2034 33.8513 33.0954 33.8513C34.196 33.8513 35.265 33.5996 36.3339 33.0967L34.9507 30.1729C34.5731 30.3617 34.2277 30.4559 33.8817 30.4559C32.8443 30.4559 32.0268 29.8585 32.0268 28.5694V12.85H28.0026ZM38.1924 12.85V28.6323C38.1924 32.122 40.3931 33.8513 43.2856 33.8513C44.3859 33.8513 45.4546 33.5996 46.5236 33.0967L45.1403 30.1729C44.7633 30.3617 44.4173 30.4559 44.0713 30.4559C43.0339 30.4559 42.2169 29.8585 42.2169 28.5694V12.85H38.1924ZM24.0405 18.6346H20.0164V33.5367H24.0405V18.6346Z"
            fill="currentColor"/>
    </svg>
  ),
  search: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
    </svg>
  ),

  searchAi: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      <text x="46%" y="48%" text-anchor="middle" alignment-baseline="middle" font-size="6" fill="currentColor" font-weight="100" font-family="'Arial', sans-serif" letter-spacing="1">IA</text>
    </svg>
  ),
};
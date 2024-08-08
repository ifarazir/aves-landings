import * as React from "react";
const HeartRateIcon = (props = {} as React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M17.642 3.999c3.337 1.075 4.525 4.73 3.503 7.916-1.674 5.111-8.641 8.356-8.641 8.356s-7.074-3.303-8.65-8.356c-1.022-3.186.175-6.831 3.512-7.916a5.74 5.74 0 0 1 2.672-.18c.892.15 1.737.765 2.466 1.304.726-.545 1.571-1.161 2.464-1.313a5.7 5.7 0 0 1 2.674.189"
            stroke="#FF47ED"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M16.948 11.365h-1.78l-1.335 2.544-2.669-5.089-1.335 2.545H8.051"
            stroke="#FF47ED"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default HeartRateIcon;

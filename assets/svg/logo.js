import * as React from "react";

const Logo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={334.5} height={63} {...props}>
    <defs>
      <filter
        id="a"
        x={0}
        y={8}
        width={72.108}
        height={49}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} result="blur" />
        <feFlood floodColor="#aeaeae" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="b"
        x={66.5}
        y={0}
        width={268}
        height={63}
        filterUnits="userSpaceOnUse"
      >
        <feOffset />
        <feGaussianBlur stdDeviation={1.5} result="blur-2" />
        <feFlood floodColor="#09a7ff" />
        <feComposite operator="in" in2="blur-2" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g data-name="Logo Ligth Ligth">
      <g filter="url(#a)">
        <path
          data-name="Cabeza"
          d="M20.372 49.52c-4.092-1.589-6.851-4.109-8.194-7.366l-4.906.9a.763.763 0 0 1-.138.013.835.835 0 0 1-.8-.646.738.738 0 0 1 .571-.915l4.762-.871a12.834 12.834 0 0 1-.267-1.276l-5.518.386h-.067a.793.793 0 1 1-.044-1.584l5.471-.4q-.014-.324-.014-.653c0-.213.005-.426.016-.638l-5.9-.329A.831.831 0 0 1 4.5 35.3a.892.892 0 0 1 .981-.74l5.946.275a14.127 14.127 0 0 1 2.036-5.129c-.163-1.25-2.015-16.283 1.428-17.995 3.375-1.677 13.037 7.212 14.192 8.289a34.443 34.443 0 0 1 13.851-.013c.857-.8 10.811-9.988 14.248-8.28 3.4 1.692 1.516 16.276 1.308 17.8a14.185 14.185 0 0 1 2.16 5.322l5.975-.277a.892.892 0 0 1 .981.74.831.831 0 0 1-.846.842l-5.926.33c.01.211.016.423.016.636s0 .436-.011.651l5.5.4a.793.793 0 1 1-.044 1.584h-.067l-5.509-.385q-.081.658-.212 1.29l4.7.859a.738.738 0 0 1 .571.915.835.835 0 0 1-.8.646.764.764 0 0 1-.139-.013l-4.74-.872a11.92 11.92 0 0 1-6.832 7.336C49.124 51.363 42.041 51.5 36.039 51.5c-5.714 0-11.323-.292-15.667-1.98Z"
          fill="#fafafa"
        />
      </g>
      <g fill="none" stroke="#303841">
        <path d="M36.054 42.074a2.312 2.312 0 0 1-1.239 2.037 4.4 4.4 0 0 1-3.953 0c-2.811-1.19-2.049-4.478-2.049-4.478M36.055 42.074a2.312 2.312 0 0 0 1.238 2.037 4.409 4.409 0 0 0 3.954 0c2.811-1.191 2.048-4.479 2.048-4.479M36.054 40.396v1.711" />
      </g>
      <path
        d="M34.944 38.213a1.823 1.823 0 0 1 1.067-.487 2.306 2.306 0 0 1 1.17.487s1.2.94 1.114 1.755-.363.911-1.114 1.287a2.358 2.358 0 0 1-2.238 0c-.756-.377-1.046-.472-1.133-1.287s1.134-1.755 1.134-1.755Z"
        fill="#303841"
      />
      <g transform="translate(20.859 33.059)" fill="#303841">
        <circle cx={3.112} cy={3.112} r={3.112} />
        <circle cx={3.112} cy={3.112} r={3.112} transform="translate(24.116)" />
      </g>
    </g>
    <g filter="url(#b)">
      <text
        data-name="CAT QUANTUM"
        transform="translate(75 41.5)"
        fill="none"
        stroke="#eef0f3"
        fontSize={30}
        fontFamily="Prompt-ExtraBold, Prompt"
        fontWeight={800}
        letterSpacing=".1em"
      >
        <tspan x={0} y={0}>
          {"CAT QUANTUM"}
        </tspan>
      </text>
    </g>
    <text
      data-name="CAT QUANTUM"
      transform="translate(75 41.5)"
      fill="none"
      stroke="#eef0f3"
      fontSize={30}
      fontFamily="Prompt-ExtraBold, Prompt"
      fontWeight={800}
      letterSpacing=".1em"
    >
      <tspan x={0} y={0}>
        {"CAT QUANTUM"}
      </tspan>
    </text>
  </svg>
);

export default Logo;

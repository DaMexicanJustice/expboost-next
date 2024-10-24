import Link from "next/link";
import UserMenu from "./user-menu";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-transparent px-16">
      <Link href="/" className="text-white text-2xl font-bold">
        <span className="sr-only">Expboost</span>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 300 300"
          preserveAspectRatio="xMidYMid meet"
          className="fill-white"
        >
          <g
            transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M1453 2740 c-12 -5 -30 -16 -40 -25 -28 -24 -349 -282 -417 -335 -10
-8 -33 -27 -50 -41 -17 -14 -78 -63 -136 -109 -58 -47 -107 -87 -110 -90 -3
-3 -34 -28 -70 -55 -36 -27 -86 -69 -112 -94 l-48 -44 0 -209 c0 -125 4 -217
10 -229 11 -20 50 -27 50 -9 0 5 4 9 9 7 6 -1 499 385 545 428 6 6 42 35 81
65 38 30 79 62 89 70 11 8 35 29 55 46 62 53 157 124 165 124 9 0 104 -72 196
-148 36 -29 72 -59 80 -65 8 -7 163 -130 343 -275 181 -144 337 -262 348 -262
33 0 40 43 40 255 l-1 200 -48 45 c-27 25 -97 83 -156 130 -58 47 -112 90
-119 95 -6 6 -52 43 -102 83 -433 350 -563 452 -573 451 -4 0 -17 -4 -29 -9z
m242 -195 c110 -88 325 -261 477 -384 l277 -222 3 -217 c2 -119 3 -218 3 -218
0 -1 -209 167 -465 373 -256 206 -477 383 -491 393 l-26 19 -489 -393 c-269
-217 -489 -393 -489 -392 0 0 1 99 3 218 l3 217 486 391 c276 221 490 387 497
383 6 -4 101 -79 211 -168z"
            />
            <path
              d="M1430 2103 c-22 -14 -187 -149 -200 -163 -3 -3 -52 -44 -110 -92 -58
-47 -115 -94 -126 -104 -12 -11 -39 -32 -60 -49 -21 -16 -57 -47 -80 -67 -23
-21 -56 -41 -75 -44 -42 -8 -69 -31 -69 -57 0 -11 -8 -38 -17 -59 l-17 -38
-288 0 -289 0 -23 -23 c-22 -22 -24 -31 -21 -123 3 -102 15 -154 37 -154 7 -1
142 -1 300 -1 158 1 294 -2 303 -5 19 -8 20 -48 1 -63 -11 -9 -94 -12 -302
-11 -283 1 -287 0 -311 -21 -20 -20 -23 -32 -23 -96 0 -42 6 -89 14 -108 l15
-35 255 0 254 0 10 -27 10 -28 12 32 c6 18 15 32 18 32 26 -4 30 7 34 106 3
92 6 108 25 127 13 12 24 20 25 17 2 -2 2 -57 0 -121 l-3 -117 -50 -36 c-27
-20 -49 -41 -49 -46 0 -5 -111 -9 -264 -9 -332 0 -316 8 -316 -146 0 -75 4
-114 15 -134 l16 -30 181 0 181 0 -7 -42 c-4 -24 -11 -47 -17 -52 -5 -6 -9
-26 -9 -45 1 -33 2 -34 13 -16 7 11 24 49 38 85 l27 65 83 5 c51 4 84 11 87
18 2 8 25 11 65 10 l62 -2 -55 -3 c-30 -2 -59 -9 -65 -16 -5 -7 -56 -45 -111
-85 -114 -81 -136 -102 -109 -102 17 0 77 37 83 52 2 4 8 8 13 8 11 0 120 83
139 104 16 20 50 21 50 2 0 -8 -10 -27 -23 -43 -33 -40 -38 -58 -21 -82 15
-20 19 -21 217 -14 l202 6 52 56 c68 72 186 207 279 319 27 32 45 27 79 -23
17 -24 33 -45 38 -45 4 0 7 -5 7 -11 0 -6 -16 3 -35 20 -20 17 -42 31 -50 31
-14 0 -58 -40 -110 -100 -81 -94 -175 -212 -175 -221 0 -26 31 4 152 147 125
146 134 154 148 137 8 -10 68 -80 133 -155 64 -75 117 -138 117 -140 0 -1
-109 -2 -242 0 -250 3 -300 0 -280 -20 8 -8 89 -11 259 -9 228 2 250 4 267 21
19 18 19 20 1 47 l-18 28 34 -30 c19 -16 37 -34 41 -40 8 -12 375 -23 428 -14
19 4 -63 7 -182 8 -134 1 -218 5 -218 11 0 6 74 9 191 9 105 0 194 2 197 6 3
3 -85 5 -197 5 l-203 -2 -56 69 c-31 37 -101 122 -155 187 -55 65 -103 131
-106 145 -16 60 -39 42 -236 -184 l-188 -216 -157 2 c-137 1 -162 -1 -188 -17
-54 -31 -47 -7 20 68 171 193 487 578 490 599 2 16 -5 27 -24 38 -32 18 -98
93 -98 111 0 16 -72 100 -81 95 -4 -3 -14 6 -23 20 -9 14 -14 25 -11 25 6 0
-99 132 -142 178 -13 14 -33 40 -44 59 -11 18 -27 33 -34 33 -7 0 -23 9 -36
20 l-24 20 220 -1 220 0 50 -67 c28 -36 84 -107 125 -157 41 -50 89 -107 105
-128 l30 -37 170 195 170 195 203 0 c111 0 202 -4 202 -8 0 -5 -17 -14 -39
-20 -24 -8 -47 -24 -62 -46 -13 -19 -67 -85 -120 -148 -256 -303 -319 -380
-319 -389 0 -6 9 -13 19 -16 11 -3 87 -84 169 -181 146 -172 348 -407 384
-446 18 -20 18 -20 18 1 0 11 -13 38 -28 59 -42 58 -65 94 -60 94 3 0 21 -12
41 -27 19 -16 46 -36 59 -45 12 -9 50 -36 83 -60 87 -63 133 -90 147 -86 12 4
-136 118 -324 252 l-68 48 0 104 c0 57 4 104 9 104 15 0 29 -24 33 -55 3 -28
6 -30 53 -33 40 -2 65 -13 121 -49 l71 -47 37 -100 c20 -56 49 -128 65 -161
24 -48 30 -55 30 -34 1 24 -19 84 -78 241 -16 40 -36 69 -67 96 -24 22 -44 42
-44 46 0 3 47 6 104 6 152 0 244 32 325 112 49 49 84 115 100 187 15 71 -3
212 -35 278 -27 55 -99 127 -149 148 -16 7 -48 21 -70 31 -32 14 -73 19 -198
22 l-157 4 -7 26 c-3 15 -12 33 -20 40 -7 7 -13 22 -13 32 0 21 -30 44 -70 53
-14 4 -41 21 -60 39 -19 19 -60 54 -90 79 -30 25 -134 110 -230 190 -96 80
-195 160 -220 179 -25 19 -46 38 -48 43 -6 13 -57 7 -82 -10z m383 -281 c169
-140 307 -254 307 -255 0 -1 -71 -1 -157 0 l-158 2 -165 133 c-90 73 -165 133
-165 133 -1 0 -75 -60 -166 -133 l-164 -133 -158 -2 c-86 -1 -157 -1 -157 0 0
1 172 143 544 450 84 69 102 80 116 70 9 -7 154 -126 323 -265z m-278 -76 c22
-17 42 -33 45 -36 3 -3 44 -37 92 -75 49 -39 88 -76 88 -82 0 -7 -9 -22 -20
-33 -25 -25 -26 -25 -150 74 -52 42 -101 76 -108 76 -19 0 -51 -18 -102 -59
-25 -20 -47 -38 -50 -41 -14 -14 -80 -60 -86 -60 -13 0 -44 33 -44 46 0 14
136 132 243 211 33 24 33 24 92 -21z m103 -230 l73 -58 -43 -46 c-24 -26 -55
-62 -70 -79 -15 -18 -31 -33 -35 -33 -5 0 -24 13 -43 30 -19 16 -39 29 -43 30
-5 0 -26 -15 -48 -32 -36 -29 -42 -31 -52 -17 -7 9 -36 45 -66 81 -29 37 -54
69 -55 72 0 3 49 46 109 94 l110 89 45 -37 c25 -20 78 -62 118 -94z m-871 -33
c7 -10 23 -30 34 -45 l20 -28 -50 0 c-51 0 -51 0 -51 33 0 28 14 57 28 57 3 0
11 -8 19 -17z m1451 5 c7 -7 12 -27 12 -45 0 -33 0 -33 -50 -33 l-51 0 33 45
c36 49 39 50 56 33z m-1322 -159 c105 -133 95 -89 93 -384 -1 -143 -5 -270
-10 -282 -5 -13 -43 -63 -85 -113 l-77 -90 -348 0 c-216 0 -350 -4 -354 -10
-4 -6 65 -11 187 -13 l193 -2 -205 -3 -205 -2 0 125 0 125 333 0 332 0 0 223
c0 122 3 232 6 245 l6 22 -326 0 c-179 0 -326 -3 -326 -7 0 -5 133 -7 296 -5
201 2 300 0 307 -7 8 -8 -81 -11 -304 -11 -174 0 -318 2 -320 4 -2 2 -3 59 -1
125 l3 121 378 0 378 0 49 -61z m1722 43 c98 -31 172 -91 215 -177 19 -39 33
-110 20 -102 -6 4 -10 -19 -11 -56 -1 -111 -52 -217 -131 -271 -75 -52 -111
-60 -319 -65 -156 -5 -195 -9 -202 -21 -6 -10 -10 25 -10 103 l0 117 170 0
c183 0 212 6 244 52 20 29 20 100 1 138 -9 17 -15 33 -14 37 1 4 -9 15 -22 25
-21 15 -53 17 -239 20 -119 1 -221 -1 -228 -6 -17 -10 -17 -617 0 -634 6 -6 9
-14 6 -17 -3 -3 -60 58 -127 136 l-121 142 0 144 0 145 103 121 c57 67 114
137 127 155 l24 32 227 0 c193 0 236 -3 287 -18z m-1101 -88 c6 -17 -24 -54
-44 -54 -19 0 -43 25 -43 44 0 8 10 22 22 30 23 17 54 7 65 -20z m-450 -159
l33 -44 -45 -28 -44 -28 -3 -70 -2 -70 -3 67 c-3 51 0 74 13 93 12 18 15 39
12 75 -3 28 -2 50 1 50 3 -1 21 -21 38 -45z m1468 19 c17 -8 21 -12 10 -8 -11
3 -92 6 -180 5 -88 0 -176 3 -195 8 -24 6 22 9 150 10 143 0 192 -3 215 -15z
m-329 -83 c41 -33 54 -52 63 -86 6 -24 11 -46 11 -49 0 -3 -26 -6 -57 -8 -55
-3 -58 -5 -61 -30 -3 -24 -5 -26 -23 -15 -17 11 -19 24 -19 136 0 117 1 123
18 109 9 -8 40 -34 68 -57z m331 54 c28 -20 47 -84 34 -118 -18 -47 -46 -57
-158 -57 l-102 0 -11 41 c-7 25 -29 61 -56 89 -24 26 -41 50 -37 53 3 4 74 7
157 7 120 0 156 -3 173 -15z m319 -188 c-31 -108 -103 -185 -214 -231 -39 -16
-75 -20 -212 -22 l-165 -2 160 8 c128 6 171 11 216 29 123 47 203 160 217 302
7 73 7 73 10 21 2 -29 -4 -77 -12 -105z m-1725 107 c10 -9 15 -23 12 -31 -8
-19 -93 -74 -104 -67 -21 13 -8 60 23 86 39 32 46 33 69 12z m-465 -27 c2 -2
-2 -10 -11 -17 -11 -9 -15 -32 -15 -81 l0 -69 -254 0 c-164 0 -257 -4 -261
-10 -5 -7 80 -10 264 -8 149 2 271 0 271 -4 0 -5 -126 -8 -280 -8 l-280 0 0
103 0 102 281 -1 c154 -1 282 -4 285 -7z m537 -48 c14 -19 9 -27 -77 -131
l-91 -110 -3 78 c-2 54 1 81 10 90 20 18 132 94 140 94 4 0 13 -9 21 -21z
m602 -1 c23 -21 26 -29 23 -80 l-3 -58 -48 61 c-47 58 -48 61 -31 80 22 24 27
24 59 -3z m-357 -275 c-102 -117 -307 -355 -327 -380 l-26 -33 -165 1 c-112 0
-156 4 -135 10 16 4 87 8 158 8 152 -1 124 -18 300 186 123 144 198 225 206
225 2 0 -3 -8 -11 -17z"
            />
            <path
              d="M125 1340 c8 -13 685 -13 705 0 10 6 -118 10 -348 10 -234 0 -361 -3
-357 -10z"
            />
            <path
              d="M2121 1346 c2 -2 112 -6 244 -9 132 -2 231 -1 220 3 -19 8 -473 14
-464 6z"
            />
            <path
              d="M144 968 c-8 -12 10 -13 226 -8 l215 5 -218 5 c-121 3 -221 2 -223
-2z"
            />
            <path
              d="M845 1500 c29 -12 282 -12 290 0 4 7 -49 10 -152 9 -98 0 -150 -4
-138 -9z"
            />
            <path
              d="M1774 1443 c-32 -37 -106 -121 -163 -188 -57 -66 -111 -123 -120
-127 -14 -6 -14 -7 1 -7 23 -1 62 38 248 249 41 47 81 92 89 100 11 11 44 16
135 18 169 5 173 22 5 22 l-135 0 -60 -67z"
            />
            <path
              d="M1239 863 c-60 -69 -93 -115 -71 -102 12 8 22 17 22 20 0 3 10 17 23
31 42 48 58 70 54 74 -2 2 -15 -8 -28 -23z"
            />
          </g>
        </svg>
      </Link>
      <div className="flex items-center space-x-6 font-bold text-sm">
        <Link
          href="/"
          className="text-yellow-400 hover:text-opacity-50 transition-opacity"
        >
          HOME
        </Link>
        <Link
          href="/episodes"
          className="text-white hover:text-opacity-50 transition-opacity"
        >
          Episodes
        </Link>
        <Link
          href="/blog-posts"
          className="text-white hover:text-opacity-50 transition-opacity"
        >
          Blog posts
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-opacity-50 transition-opacity flex items-center"
        >
          Contact Us
          {/* <span className="ml-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            2
          </span> */}
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-opacity-50 transition-opacity"
        >
          About Us
        </Link>
        <UserMenu />
      </div>
    </nav>
  );
}

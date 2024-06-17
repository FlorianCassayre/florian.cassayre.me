import React from 'react';
import { PgpKeyCard } from '../../../components/card/PgpKeyCard';

const PGP_KEY: string =
  `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v1

mQINBFiwvE4BEADDqk4JchctQJKsNiXjoTfnuaOv0gbNBg2KzK+MhzLqp/TZlbox
pj+n3zesLBRUK0RkZ2VpdDtkU+qNzredRanrFmNnhHaLfmPioNZKnGpcx2b8h2Xo
1B2M3vkXCurueAIWsCozefpoVCI0rRzyP2FpQsC5zUn2X2vR9/kLwCqAs4hYey6C
96ok0UeDOpmuVW4+7QF7M+oaEs/57jIJwRc/abaohC3sg6xcPUyFGV0FHYkZgj38
0aMinzi8r5CM6yYLl7eXfHY3nkhK7GaPGpOiWrBxVzbU3cJ9KThS5P8mIMNi+Y+D
hI60837QqxBx379U784y1k5wAx6EC9qGR/NwjeOlNRUZhVpfNOfs7LiW/7BHOjRT
fWuD+A6zw1OIg+Y74Rdq7ivnwzFpnJRdKHsVqvQgEejS+A5pnQX9EMXk5sChYHrm
0U+ndkdsJAXxgmJgDGwq8Xr+3fGBgP7z5QqbpzJJvUFoM2dw/VXr9jOjFt3dZV/3
eaLKJkvJaLtBFdk5dIu01leddHrXgdP9GQTDmydN2zWsxZWSHuQBAOai2QLTEq+3
g1p0Z9VZGA+75LmmPpGKxS+OKsMZaTr+8lgCRB9E7I9GJDZnhviPom00L/5OXCo8
9eI4EwKc4H+NpMjb3kTVKJbvpFQv6uzaOzhQ9O3udWCY7c5aPogkglRxvQARAQAB
tC1GbG9yaWFuIENhc3NheXJlIDxmbG9yaWFuLmNhc3NheXJlQGdtYWlsLmNvbT6J
AjsEEwECACUCGwMGCwkIBwMCBhUIAgkKCwQWAgMBAh4BAheABQJb2f1gAhkBAAoJ
ELKAAeBBOLb+vIQP/RQqD/TdmeO7aF2DzEUY0MAxIxNS2bjBaGNi4slhxFdaFvEe
5nE7c9TrGsiBiiL4HwdI5DRArCqH6os1LpBJa7G+zLMes+Z8KpdA5iCGp+LXpetv
YmKA1fxYREmieulGEh75llExf9stuswRyj1PVZVZD50Vv9KIMZrxQikESofx/Hxq
9ywXvWHunmG+NJxEbKwXOWKay0Lm/l27KpepftY99F74QVGvrm3QzyV7CgPGLQEO
tx4wWt6ae5Puu+hN8bM0TfeRQozMLccMCD8pMmhDqv2zVBxZ0bplf4UTnMrsUIcd
G3LqAJDDZIuLeM4L6SJ4pDZidixfnZYnfz6m+LKKDpChuvo9jmcZoEYNJerpf6rv
cYqnhxsbh8yp3gTg2IwHBnIetMoNOlew5UY61e+exPK2N6vUsfR3gOdlBStljRkF
KuyEs3DJEBbVrW5m0RYdDKZOABrPfnELJM/PWgj03ltq373CPdZluFl+NYAyRtI5
6gsvNNnChbFjJtatB3MupDU2G5KMXccVm5EFlI0mwqb7cyVA7CexV4EA6WdnrVA+
P/FxSZYxzi1GHdek691Tjpztque0VsstIaqZrovF75VequbOZZ+FkNrQjyZDNkxJ
WyzgSNn/ESGuyD8G1exYPCvyFVzNbHc3EGrAaoZsdJQ2rXsr9imTyn8JtlhwuQIN
BFiwvE4BEAC0V36XjvjjDW/rYYzBUbW0qXIujg/LqmWXz7oFMfxoPZOwqswrWQ1l
1NuRyfFl8ZDqMAGkHVD35v9yw/WV2SLAca7Uy+pyygYSmx7LbghxkK+bHscjjGqC
J7bKIGvGSdDd5G/+aS9k64PZOf7jfnzLXbUN8q2YCKJ2ki76GH9S55Tf54QxcYQD
h85Ie0czNIGGbCt6UyFBcsTdyq7rvtAZ+cQ7vDva/962s4YtDun8UMdonmm0dPC/
Be6PECkF4j+2Wf216bdOYjzsFQ80u6bCtLki6pAfzln0PQzdfS8hvAXZWJSq0djH
h83PQliAPwJZV9YEmOjhojmfS3VYva6qjifPxJAmtqTfEdU4OhG9YsrUXssX9w3d
yAd8y8lhwubUswp8gLNqUPOSvCQf6nPkJUP614LdpZsxg5+PNwqDwLXaJCBEQ0DN
A6ZlEtE17begumuIYxMAQ1PYsTBWUSFzz5TMj6CknrQCZjHJhCByXyAsv6GR0sMK
cqetIu2OkKL3GPP1ArF64RkLIdy/FZh5HCvQilVdTrPNWlwKmng243NX308o9Eqw
s3RFEV5zZ5aBP0nzKohDRF4G5yZOJ2r6CIqF2pQEgYOSad92qk2jpPdQVJN707ft
7Xftg1Ed6I0AC4FW7hXxo6xrAsVEcObHTFl9i+3d6ZeoOaTH1OaJowARAQABiQIf
BBgBAgAJBQJYsLxOAhsMAAoJELKAAeBBOLb+xFkQAKiUaAxf6em82utuz2SJ6Emf
Fny8EsvJDegSrVglHhnovrWqHC0+ZAceTDoQmEN7sZACn60Gp90/mZdo6FxnfhZB
mhe30tY948MYowA4J0Pv8DQ6UUVcnlibM9f99iFnxCFbJ/zycn43MjEPZz7FPXBa
CJ/q5sGxT9oz1x4FmsdI0Cl5Zhj3MJa8VqREzU5Oc8LE+qGepJe9v2Xh0Gjdja0A
3Uwh41yTdomZ0TALXMxdOaYJF1ExMWUjSgC0ztcsPSrCFRQnikekAq3zmXKRxzEg
U5WEESmRjzas15IiD17UkleWHTNJsnEd4NduQeSaIsJJhoHLhFiVgUgCXYnPKbHz
kuFTX1SjKhy8/xYctRgYIMzjYf/k/zoSM4orDWEjD2HrUGGWFTU7bU5A5M9Ae3Xy
e9FUVasRkzGBgUs+3p+OR6HuhLM1/umuqJnNAlhXCrblEuoUW0QmUWlD/UDamhA2
be0dDRUC+7xbGGm49SdvMW7DKKUJoXVaXT1pM0mvnaKyF8OtDAJHMp1HLNZ+2rwR
GBpjctWjx8o1DmgRGWmnmI5rGOOaGLTQCpK8YuOjdvLeYvGpGllberVtDbxGAiRG
ZseInRlyWPfc2BULUFwYkZ74W5WXm7Fliwg0QHZUa5rFyDceX4TZVtELm5/tIjX0
xLdcThS/nFlnT6rDq7k8
=syih
-----END PGP PUBLIC KEY BLOCK-----`;

export const PgpKeyCardContent: React.FC = () => {
  return (
    <PgpKeyCard
      pgpKey={PGP_KEY}
      scheme="4096-bit RSA"
    />
  )
}

import React from 'react';

import { useIntl } from 'react-intl';

import { PublicationsCard } from '../../../components/card/PublicationsCard';

const Key = 'home.publications';

export const PublicationsCardContent: React.FC = () => {
  const { $t } = useIntl();
  return (
    <PublicationsCard
      publications={[
        {
          title: 'LISA: Towards a Foundational Theorem Prover',
          year: 2022,
          conference: "AITP'22",
          authors: ['Simon Guilloud', 'Florian Cassayre', 'Viktor Kunčak'],
          description:
            'We present the foundations and initial implementation of a new interactive theorem prover, named LISA. [...] LISA aims to use classical mainstream foundations of mathematics [...]. LISA uses (single-sorted) first order logic (with schematic variables) as the syntactic framework and set theory axiom schemas as the semantic framework. [...] On top of these foundations we can construct numbers and other mathematical theories and models of computation without introducing new axioms. As the target use of LISA we envision mathematical statements as well as formal proofs of computer programs and systems [...]. An important aim of LISA is interoperability with other proof assistants. We hope that the design of LISA with small, fresh code base, simple foundation and explicit proof objects will encourage building bridges with other tools.',
          link: 'https://aitp-conference.org/2022/abstract/AITP_2022_paper_23.pdf',
        },
        {
          title: 'Image Denoising with Control over Deep Network Hallucination',
          year: 2022,
          conference: "EI'22",
          authors: ['Qiyuan Liang', 'Florian Cassayre', 'Haley Owsianko', 'Majed El Helou', 'Sabine Süsstrunk'],
          description:
            'Deep image denoisers achieve state-of-the-art results but with a hidden cost. As witnessed in recent literature, these deep networks are capable of overfitting their training distributions, causing inaccurate hallucinations to be added to the output and generalizing poorly to varying data. [...] We propose a novel framework exploiting a denoising network. We call it controllable confidence-based image denoising (CCID). [...] We exploit the outputs of a deep denoising network alongside an image convolved with a reliable filter. [...] We propose to fuse the two components with a frequency-domain approach that takes into account the reliability of the deep network outputs. [...]. Our CCID not only provides more interpretability and control, but can even outperform both the quantitative performance of the deep denoiser and that of the reliable filter, especially when the test data diverge from the training data.',
          link: 'https://arxiv.org/abs/2201.00429',
        },
        {
          title: 'A front-end for the LISA proof assistant',
          year: 2022,
          authors: ['Florian Cassayre'],
          context: $t({ id: `${Key}.lisaFrontMscThesis.context` }),
          description: $t({ id: `${Key}.lisaFrontMscThesis.shortAbstract` }),
          link: 'https://doi.org/10.5281/zenodo.6645113',
        },
        {
          title: 'Theorem proving framework in Scala',
          year: 2020,
          authors: ['Florian Cassayre'],
          context: $t({ id: `${Key}.lcfMscProject.context` }),
          description:
            'The goal of this semester project was to design a proof framework and use it to formalize elementary set theory. Safety is ensured by the compiler through type checking, while formal soundness is guaranteed by the execution. This hybrid verification process allows the framework to be used interactively inside an IDE. It is shown how types can encode logic formulas, in particular first order logic and higher order theories.',
          link: 'https://doi.org/10.5281/zenodo.4284080',
        },
      ]}
    />
  );
};

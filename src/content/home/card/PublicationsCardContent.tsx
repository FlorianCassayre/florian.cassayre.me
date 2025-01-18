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
          title: 'Upgrading the IMPACT Application for Enhanced Risk Declaration and Approval Processes at CERN',
          year: 2025,
          conference: "IPAC'25",
          authors: [],
          abstract: '',
          upcoming: true,
        },
        {
          title: 'LISA: Towards a Foundational Theorem Prover',
          year: 2022,
          conference: "AITP'22",
          authors: ['Simon Guilloud', 'Florian Cassayre', 'Viktor Kunčak'],
          abstract:
            'We present the foundations and initial implementation of a new interactive theorem prover, named LISA. In a slight contrast to most popular type-theoretic frameworks, and much like Mizar, LISA aims to use classical mainstream foundations of mathematics, taking a hint, among others from the talk of John Harrison in this very venue in 2018. LISA uses (single-sorted) first order logic (with schematic variables) as the syntactic framework and set theory axiom schemas as the semantic framework. On top of these foundations we can construct numbers and other mathematical theories and models of computation without introducing new axioms. As the target use of LISA we envision mathematical statements as well as formal proofs of computer programs and systems, possibly with probabilistic and distributed behavior. For automation in LISA we expect to employ newly developed algorithms for equivalence checking of formulas and proofs, existing high-performance superposition-based theorem provers such as Vampire, SPASS, E and Zipperposition, as well as SMT solvers such as Z3, CVC5, and veriT, and OpenSMT. An important aim of LISA is interoperability with other proof assistants. We hope that the design of LISA with small, fresh code base, simple foundation and explicit proof objects will encourage building bridges with other tools. We also expect that the system will serve as a good vehicle to explore machine-learning guided superposition proof search, with learned heuristics complementing hand-tuned ones. We also plan to explore high-level translation of proofs from other systems into LISA, inspired by the success of deep neural networks in natural language translation.',
          link: 'https://aitp-conference.org/2022/abstract/AITP_2022_paper_23.pdf',
        },
        {
          title: 'Image Denoising with Control over Deep Network Hallucination',
          year: 2022,
          conference: "EI'22",
          authors: ['Qiyuan Liang', 'Florian Cassayre', 'Haley Owsianko', 'Majed El Helou', 'Sabine Süsstrunk'],
          abstract:
            'Deep image denoisers achieve state-of-the-art results but with a hidden cost. As witnessed in recent literature, these deep networks are capable of overfitting their training distributions, causing inaccurate hallucinations to be added to the output and generalizing poorly to varying data. For better control and interpretability over a deep denoiser, we propose a novel framework exploiting a denoising network. We call it controllable confidence-based image denoising (CCID). In this framework, we exploit the outputs of a deep denoising network alongside an image convolved with a reliable filter. Such a filter can be a simple convolution kernel which does not risk adding hallucinated information. We propose to fuse the two components with a frequency-domain approach that takes into account the reliability of the deep network outputs. With our framework, the user can control the fusion of the two components in the frequency domain. We also provide a user-friendly map estimating spatially the confidence in the output that potentially contains network hallucination. Results show that our CCID not only provides more interpretability and control, but can even outperform both the quantitative performance of the deep denoiser and that of the reliable filter, especially when the test data diverge from the training data.',
          link: 'https://arxiv.org/abs/2201.00429',
        },
        {
          title: 'A front-end for the LISA proof assistant',
          year: 2022,
          authors: ['Florian Cassayre'],
          context: $t({ id: `${Key}.lisaFrontMscThesis.context` }),
          abstract: $t({ id: `${Key}.lisaFrontMscThesis.shortAbstract` }),
          link: 'https://doi.org/10.5281/zenodo.6645113',
        },
        {
          title: 'Theorem proving framework in Scala',
          year: 2020,
          authors: ['Florian Cassayre'],
          context: $t({ id: `${Key}.lcfMscProject.context` }),
          abstract:
            'The goal of this semester project was to design a proof framework and use it to formalize elementary set theory. Safety is ensured by the compiler through type checking, while formal soundness is guaranteed by the execution. This hybrid verification process allows the framework to be used interactively inside an IDE. It is shown how types can encode logic formulas, in particular first order logic and higher order theories.',
          link: 'https://doi.org/10.5281/zenodo.4284080',
        },
      ]}
    />
  );
};

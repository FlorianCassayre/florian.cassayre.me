import React from 'react';

import { useIntl } from 'react-intl';

import { ProfessionalTimeline } from '../../components/ProfessionalTimeline';

const Key = 'home.career';

export const ProfessionalTimelineContent: React.FC = () => {
  const { $t } = useIntl();
  const EPFL = {
    // Do not translate "EPFL": https://www.epfl.ch/about/overview/identity/
    name: 'EPFL',
    fullname: 'École Polytechnique Fédérale de Lausanne',
    logo: '/institutions/epfl-logo.svg',
    logoScale: 0.95,
  };
  const KTH = {
    name: 'KTH',
    fullname: 'Kungliga Tekniska Högskolan',
    logo: '/institutions/kth-logo.svg',
    logoScale: 1.1,
  };
  const CERN = {
    name: 'CERN',
    fullname: $t({ id: `${Key}.institutions.cern` }),
    logo: '/institutions/cern-logo.svg',
    logoScale: 0.8,
  };
  return (
    <ProfessionalTimeline
      events={[
        {
          date: `2025 - ${$t({ id: `${Key}.timeNow` })}`,
          institution: CERN,
          title: $t({ id: `${Key}.positions.title.fullStackSoftwareEngineer` }),
          subtitle: $t({ id: `${Key}.positions.subtitle.staff` }),
          work: true,
        },
        {
          date: `2022 - 2025`,
          institution: CERN,
          title: $t({ id: `${Key}.positions.title.fullStackSoftwareEngineer` }),
          subtitle: $t({ id: `${Key}.positions.subtitle.fellow` }),
          work: true,
        },
        {
          date: '2020',
          institution: CERN,
          title: $t({ id: `${Key}.positions.title.fullStackSoftwareEngineer` }),
          subtitle: $t({ id: `${Key}.positions.subtitle.intern` }),
          work: true,
        },
        {
          date: '2019 - 2022',
          institution: EPFL,
          title: $t({ id: `${Key}.positions.title.master` }),
          subtitle: $t({ id: `${Key}.positions.subtitle.computerScience` }),
          work: false,
        },
        {
          date: '2018 - 2019',
          institution: KTH,
          title: $t({ id: `${Key}.positions.title.academicExchange` }),
          work: false,
        },
        {
          date: '2016 - 2019',
          institution: EPFL,
          title: $t({ id: `${Key}.positions.title.bachelor` }),
          subtitle: $t({ id: `${Key}.positions.subtitle.computerScience` }),
          work: false,
        },
      ]}
    />
  );
};

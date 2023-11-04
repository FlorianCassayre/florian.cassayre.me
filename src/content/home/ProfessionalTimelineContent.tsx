import React from 'react';
import { ProfessionalTimeline } from '../../components/ProfessionalTimeline';

export const ProfessionalTimelineContent: React.FC = () => {
  const EPFL = {
    name: 'EPFL',
    fullname: 'École Polytechnique Fédérale de Lausanne',
    logo: '/institutions/epfl-logo.svg',
    logoScale: 0.95,
  };
  const KTH = {
    name: 'KTH',
    fullname: 'Kungliga Tekniska högskolan',
    logo: '/institutions/kth-logo.svg',
    logoScale: 1.1,
  };
  const CERN = {
    name: 'CERN',
    fullname: 'European Laboratory for Particle Physics',
    logo: '/institutions/cern-logo.svg',
    logoScale: 0.8,
  };
  return (
    <ProfessionalTimeline
      events={[
        {
          date: '2022 - now',
          institution: CERN,
          title: 'Full-stack Software Engineer',
          work: true,
        },
        {
          date: '2020',
          institution: CERN,
          title: 'Full-stack Software Engineer Intern',
          work: true,
        },
        {
          date: '2019 - 2022',
          institution: EPFL,
          title: 'Master in Computer Science',
          work: false,
        },
        {
          date: '2018 - 2019',
          institution: KTH,
          title: 'Exchange year',
          work: false,
        },
        {
          date: '2016 - 2019',
          institution: EPFL,
          title: 'Bachelor in Computer Science',
          work: false,
        },
      ]}
    />
  );
};

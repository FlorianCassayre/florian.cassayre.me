import React, { useState } from 'react';

import { UnfoldLess, UnfoldMore } from '@mui/icons-material';
import { Grid, IconButton, Table, Tooltip, styled } from '@mui/joy';

const AlignedTable = styled(Table)({
  'th, td, th': {
    textAlign: 'center',
  },
});

interface WeightProps {
  children: number;
}

const Weight: React.FC<WeightProps> = ({ children }) => {
  const format = (v: number): string => v.toFixed(1);
  const value = format(children);
  return <>{value === format(0) ? `<${format(0.1)}` : value} kg</>;
};

interface Equipment {
  name: string;
  weight: number;
  quantity?: number; // Not used
}

interface EquipmentCategory {
  name: string;
  equipment: Equipment[];
}

interface EquipmentTableLayoutProps {
  categories: EquipmentCategory[];
  collapsed: boolean;
  onCollapseToggle: () => void;
}

const EquipmentTableLayout: React.FC<EquipmentTableLayoutProps> = ({ categories, collapsed, onCollapseToggle }) => {
  return (
    <AlignedTable borderAxis="x" variant="outlined">
      <thead>
        <tr>
          <th colSpan={!collapsed ? 2 : 1}>
            <Tooltip title={!collapsed ? 'Simplifier' : 'Détailler'}>
              <IconButton onClick={onCollapseToggle}>{!collapsed ? <UnfoldLess /> : <UnfoldMore />}</IconButton>
            </Tooltip>
          </th>
          <th colSpan={!collapsed ? 2 : 1} style={{ verticalAlign: 'middle' }}>
            Poids
          </th>
        </tr>
      </thead>
      <tbody>
        {categories.map(({ name: categoryName, equipment }, i) =>
          equipment.slice(0, !collapsed ? undefined : 1).map(({ name, weight }, j) => (
            <tr key={i}>
              {j === 0 && (
                <th scope="row" rowSpan={!collapsed ? equipment.length : undefined}>
                  {categoryName}
                </th>
              )}
              {!collapsed && (
                <>
                  <td>{name}</td>
                  <td>
                    <Weight>{weight}</Weight>
                  </td>
                </>
              )}
              {j === 0 && (
                <td rowSpan={!collapsed ? equipment.length : undefined}>
                  <Weight>{equipment.map(({ weight }) => weight).reduce((a, b) => a + b)}</Weight>
                </td>
              )}
            </tr>
          ))
        )}
        <tr>
          <td colSpan={!collapsed ? 2 : 1} />
          <td colSpan={!collapsed ? 2 : 1}>
            <strong>
              <Weight>
                {categories
                  .flatMap(({ equipment }) => equipment)
                  .map(({ weight }) => weight)
                  .reduce((a, b) => a + b, 0)}
              </Weight>
            </strong>
          </td>
        </tr>
      </tbody>
    </AlignedTable>
  );
};

interface EquipmentTableToggleableProps extends Pick<EquipmentTableLayoutProps, 'categories'> {}

const EquipmentTableToggleable: React.FC<EquipmentTableToggleableProps> = ({ categories }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Grid container justifyContent="center" sx={{ my: 2 }}>
      <Grid xs={12} sm={12} md={10} lg={8}>
        <EquipmentTableLayout
          categories={categories}
          collapsed={collapsed}
          onCollapseToggle={() => setCollapsed(!collapsed)}
        />
      </Grid>
    </Grid>
  );
};

export const EquipmentTable: React.FC = () => {
  return (
    <EquipmentTableToggleable
      categories={[
        {
          name: 'Vélo et accessoires',
          equipment: [
            {
              name: 'Vélo',
              weight: 15.1,
            },
            {
              name: 'Cadenas',
              weight: 0.5,
            },
            {
              name: 'Casque',
              weight: 0.25,
            },
            {
              name: 'Sacoches',
              weight: 1.6,
              quantity: 2,
            },
            {
              name: 'Panier bouteille',
              weight: 0.1,
            },
            {
              name: 'Sac de cadre',
              weight: 0.1,
            },
            {
              name: 'Garmin Edge Explore 2',
              weight: 0.104,
            },
            {
              name: 'Bidons',
              weight: 0.2,
              quantity: 2,
            },
            {
              name: 'Pompe',
              weight: 0.1,
            },
            {
              name: 'Chambre à air',
              weight: 0.1,
            },
            {
              name: 'Démontes-pneus',
              weight: 0.01,
            },
            {
              name: 'Kit rustines',
              weight: 0.02,
            },
            {
              name: 'Lubrifiant',
              weight: 0.2,
            },
            {
              name: 'Outils',
              weight: 0.1,
            },
          ],
        },
        {
          name: 'Affaires',
          equipment: [
            {
              name: 'Vêtements',
              weight: 2.2,
            },
            {
              name: 'Serviette',
              weight: 0.3,
            },
            {
              name: 'Toilette',
              weight: 0.5,
            },
            {
              name: 'Lunettes de soleil',
              weight: 0.03,
            },
            {
              name: 'Gants',
              weight: 0.02,
            },
            {
              name: 'Chaussures',
              weight: 0.6,
            },
          ],
        },
        {
          name: 'Camping',
          equipment: [
            { name: 'Tente + duvet', weight: 2 + 0.1 },
            { name: 'Réchaud + recharge', weight: 0.6 + 0.1 },
            { name: 'Frontale', weight: 0.1 },
            { name: 'Couteau suisse', weight: 0.1 },
            {
              name: 'Ficelle',
              weight: 0.01,
            },
            {
              name: 'Masque et bouchons',
              weight: 0.02,
            },
            {
              name: 'Demi sopalin',
              weight: 0.1,
            },
            {
              name: 'Cuillère',
              weight: 0.02,
            },
          ],
        },
        {
          name: 'Nourriture',
          equipment: [
            {
              name: 'Plats lyophilisés',
              weight: 0.129 + 0.121 + 0.138 + 0.132 + 0.133 + 0.027 + 0.151 + 0.148 + 0.135 + 0.16 + 0.16,
              quantity: 11,
            },
            {
              name: 'Soupes lyophilisées',
              weight: 0.09,
              quantity: 3,
            },
            {
              name: 'Compotes',
              weight: 0.18,
              quantity: 2,
            },
            {
              name: 'Sucre boisson',
              weight: 0.288,
              quantity: 6,
            },
            {
              name: 'Barres',
              weight: 0.675,
              quantity: 15,
            },
            {
              name: 'Fruits à coque',
              weight: 0.25,
            },
          ],
        },
        {
          name: 'Électronique',
          equipment: [
            { name: 'Câbles et chargeur', weight: 0.1 },
            { name: 'Batteries', weight: 0.45 },
            { name: 'Chargeur solaire', weight: 0.8 },
          ],
        },
      ]}
    />
  );
};

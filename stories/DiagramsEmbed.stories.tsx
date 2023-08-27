import { Meta, StoryObj } from '@storybook/react';
import { DiagramsEmbed } from '../src/DiagramsEmbed';
import React from 'react';

const meta: Meta<typeof DiagramsEmbed> = {
  title: 'Components/DiagramsEmbed',
  component: DiagramsEmbed,
  parameters: {
    layout: 'centered'
  },
  args: {
    urlParameters: {
      ui: 'kennedy',
      spin: true,
      libraries: true,
      saveAndExit: true
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '500px' }}>
        <Story />
      </div>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof DiagramsEmbed>;

export const Default: Story = {};

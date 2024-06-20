import React from 'react';
import HeroBanner from '../stories/HeroBanner';

export default {
  title: 'stories/HeroBanner',
  component: HeroBanner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <HeroBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#f0f0f0',
  title: 'Welcome to Storybook Hero Banner',
  subtitle: 'Explore the possibilities',
  description: 'This is a Hero Banner component built with React and Storybook.'
};
export const AnotherVariant = () => (
  <HeroBanner
    title="Another Variant"
    subtitle="A different look"
    description="Explore this alternative design."
  />
);
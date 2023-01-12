import { ComponentStory, ComponentMeta } from '@storybook/react';
import InstructorCard, { IInstructorCard } from './InstructorCard';
import { mockInstructorCardProps } from './InstructorCard.mocks';

export default {
    title: 'cards/InstructorCard',
    component: InstructorCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof InstructorCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InstructorCard> = (args) => (
    <InstructorCard {...args} />
  );
  
  export const Base = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  
  Base.args = {
    ...mockInstructorCardProps.base,
  } as IInstructorCard;
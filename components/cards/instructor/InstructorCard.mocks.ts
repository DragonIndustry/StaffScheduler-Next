import { IInstructorCard } from './InstructorCard';

const base: IInstructorCard = {
  tag: 'Felines',
  title: `What's new in Instructors`,
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  author: 'Alex',
  time: '2h ago',
};

export const mockInstructorCardProps = {
  base,
};
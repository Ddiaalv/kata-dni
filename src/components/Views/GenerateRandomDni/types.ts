export interface PersonProps {
  cell: string;
  dob: { date: string; age: number };
  gender: string;
  name: { first: string; last: string; title: string };
  picture: { large: string; medium: string; thumbnail: string };
}

export const PersonDefault = {
  cell: '',
  dob: {
    age: 1,
    date: '',
  },
  gender: '',
  name: { first: '', last: '', title: '' },
  picture: {
    large: '',
    medium: '',
    thumbnail: '',
  },
};

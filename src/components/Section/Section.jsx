import style from './Section.styled';

export const  Section = ({ title, children }) => {

  return (
    <style.Section>
      <h2>{title}</h2>
      {children}
    </style.Section>
  )
}
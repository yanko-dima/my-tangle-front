import { Category } from '@/components/Category';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tangle Teezer The Ultimate Styler',
  description: 'Tangle Teezer The Ultimate Styler Description',
};

export default function UltimateStyler() {
  return (
    <Category
      gName={'The Ultimate Styler'}
      imgLink={'https://my-tangle.com.ua/images/ult480.jpg'}
      imgDescription={'The Ultimate Styler'}
      gDescriptionOne={'Потрясающий стайлер '}
      fullName={'Tangle Teezer The Ultimate'}
      gDescriptionTwo={
        ' - это наша первая профессиональная расческа для ежедневного использования, с ручкой. Уникальные удлиненные зубчики с более мягкими кончиками, которые мягко расчесывают, не вырывая и нанося урон вашим волосам, предавая им нужную форму и естественный блеск. Предназначена для достижения идеальной прически по обьему и текстуре, можно расчесывать мокрые волосы. '
      }
    />
  );
}

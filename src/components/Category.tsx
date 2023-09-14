import styles from './stylesCategory.module.css';

type Props = {
  gName: string;
  imgLink: string;
  imgDescription: string;
  gDescriptionOne: string;
  fullName: string;
  gDescriptionTwo: string;
};

export const Category = ({
  gName,
  imgLink,
  gDescriptionOne,
  gDescriptionTwo,
  imgDescription,
  fullName,
}: Props) => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.imageBlock}>
        <img
          className={styles.tangleImage}
          src={imgLink}
          alt={imgDescription}
        />
      </div>
      <div className={styles.descriptionBlock}>
        <div className={styles.descriptionBlockForStyling}>
          <h1 className={styles.tangleName}>{gName}</h1>
          <div className={styles.line}></div>
          <p className={styles.tangleDescription}>
            {gDescriptionOne} <strong>{fullName}</strong> {gDescriptionTwo}
          </p>
        </div>
      </div>
    </section>
  );
};

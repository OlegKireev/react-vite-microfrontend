import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export const Container: FC<PropsWithChildren & { className?: string }> =
  function Container({ children, className }) {
    return <div className={clsx(styles.container, className)}>{children}</div>;
  };

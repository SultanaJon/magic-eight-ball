'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import classNames from 'classnames';
import styles from './styles.module.css';
import { useState } from 'react';
import { data } from './answers';

export default function Home() {
  const [question, setQuestion] = useState<string>(``);
  const [answer, setAnswer] = useState<string>(``);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
    setQuestion(e.currentTarget.value);

  const onClickHandler = () => {
    setAnswer(``);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setAnswer(getAnswer());
    }, 3000);
  };

  const getAnswer = () => {
    const index = Math.floor(Math.random() * data.length);
    return data[index];
  };

  return (
    <div className={classNames(styles.center, styles.fullView)}>
      <div className={styles.content}>
        <div className={classNames(styles.eightball, styles.center)}>
          <div className={styles.eightBallWindow}>
            <span className={classNames(styles.answer, styles.center)}>
              {answer}
            </span>
          </div>
        </div>
        <Input
          onChange={onChangeHandler}
          placeholder="Ask the eight ball a question"
        />
        <Button onClick={onClickHandler} disabled={question == `` || isLoading}>
          {isLoading ? 'Asking eight ball...' : 'Ask the eight ball'}
        </Button>
      </div>
    </div>
  );
}

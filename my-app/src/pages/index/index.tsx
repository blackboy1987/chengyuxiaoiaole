import * as React from 'react';
import { View, Text } from 'remax/wechat';
import classNames from 'classnames';
import styles from './index.css';

const line=[
    [1,2,3,4,5,6,7,8,9,10],
    [11,12,13,14,15,16,17,18,19,110],
    [21,22,23,24,25,26,27,28,29,210],
    [31,32,33,34,35,36,37,38,39,310],
    [41,42,43,44,45,46,47,48,49,410],
    [51,52,53,54,55,56,57,58,59,510],
    [61,62,63,64,65,66,67,68,69,610],
    [71,72,73,74,75,76,77,78,79,710],
    [81,82,83,84,85,86,87,88,89,810],
    [91,92,93,94,95,96,97,98,99,910],
    [101,102,103,104,105,106,107,108,109,1010],
];

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.gamePanel}>
        {
          line.map((row,index)=>(
              <View className={styles.row} key={index}>
                {
                  row.map((item,index)=>
                      <View
                          key={`${index}_${item}`}
                          className={classNames(styles.item, index===3 ? styles.show:'', index===5 ? styles.success :index===8 ? styles.error : '')}
                      >
                          <Text className={styles.text}>{index===3 ? item : ''}</Text>
                      </View>
                  )
                }
              </View>
          ))
        }
      </View>
    </View>
  );
};

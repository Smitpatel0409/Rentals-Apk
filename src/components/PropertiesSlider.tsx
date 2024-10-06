import { Image, StyleSheet, View } from 'react-native';
import React, { FC, useMemo } from 'react';
import { propertiesData } from '../utils/productsData';
import AutoScroll from '@homielab/react-native-auto-scroll';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PropertiesSlider = () => {
  const rows = useMemo(() => {
    const result = [];
    for (let i = 0; i < propertiesData.length; i += 3) {
      result.push(propertiesData.slice(i, i + 3));
    }
    return result;
  }, []);

  return (
    <View pointerEvents="none">
      <AutoScroll style={styles.autoScroll} endPaddingWidth={0} duration={10000}>
        <View style={styles.gridContainer}>
          {rows.map((row, rowIndex) => {
            return (
              <MemoizedRow key={rowIndex} row={row} rowIndex={rowIndex} />
            );
          })}
        </View>
      </AutoScroll>
    </View>
  );
};

const Row: FC<{ row: typeof propertiesData; rowIndex: number }> = ({ row, rowIndex }) => {
  return (
    <View style={styles.row}>

      {row.map((image, imageIndex) => {
        const horizontalShiflt = rowIndex % 2 == 0 ? -18 : 18
        return (
          <View style={[styles.propertyContainer,{transform:[{translateX:horizontalShiflt}]}]} key={imageIndex}> 
            <Image style={styles.propertyImage} source={image} />
          </View>
        );
      })}
    </View>
  );
};

// Memoizing Row component to optimize re-renders
const MemoizedRow = React.memo(Row);

const styles = StyleSheet.create({
  autoScroll:{
    height:hp("56%"),
    position:"absolute",
    zIndex:-2,
  },
  gridContainer:{
    justifyContent:"center",
    overflow:"visible",
    alignItems:"center"
  },
  row:{
    flexDirection:"row",
    marginBottom:10
  },
  propertyContainer:{
    marginBottom:12,
    marginHorizontal:10,
    width:wp("25%"),
    height: hp("15%"),
    justifyContent:"center",
    alignItems:"center",
  },
  propertyImage:{
    width: "100%",
    height:"100%",
    resizeMode:"contain"
  }
});

export default PropertiesSlider;

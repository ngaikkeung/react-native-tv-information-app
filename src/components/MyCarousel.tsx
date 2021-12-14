import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, Dimensions, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { getAllEpisodeBegin } from '../redux/action/episodeAction';
import { scrollInterpolators, animatedStyles } from '../utils/animations';
import { useNavigation } from '@react-navigation/core';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 1.2);

const MyCarousel = () => {
    const [index, setIndex] = useState(0);
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const { allEpisode, isLoading } = useSelector((state: RootStateOrAny) => state)

    useEffect(() => {
        dispatch(getAllEpisodeBegin())
    }, [])

    const renderItem = ({ item }: any) => {
        return (
            <View style={[styles.container, styles.itemContainer]}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ height: '100%', width: '100%' }}
                    onPress={() => navigation.navigate("ProgrameDetail")}
                >
                    <Image
                        style={styles.itemImg}
                        source={{
                            uri: item.show.image?.original
                        }}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.itemNameLabel} numberOfLines={2}>
                            {item.show.name}
                        </Text>
                        <Text style={styles.itemLabel} numberOfLines={1}>
                            {item.show.type} / {item.show.language}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    
    return (
        <View>
            {
                isLoading ?
                    <ActivityIndicator /> : (
                        <><Carousel
                            ref={(c) => c}
                            data={allEpisode}
                            renderItem={renderItem}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            containerCustomStyle={styles.carouselContainer}
                            inactiveSlideShift={0}
                            onSnapToItem={(index) => setIndex(index)}
                            scrollInterpolator={scrollInterpolators.scrollInterpolator4}
                            slideInterpolatedStyle={animatedStyles.animatedStyles4}
                            useScrollView={false}
                            hasParallaxImages={true}
                        /></>
                    )}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    carouselContainer: {
        marginTop: 5
    },
    textContainer: {
        height: ITEM_HEIGHT * 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemNameLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    itemLabel: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    },
    counter: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    itemImg: {
        width: '100%',
        height: '80%',
        resizeMode: "stretch",
        flex: 1,
    },
    itemContainer: {
        width: SLIDER_WIDTH - 60,
        height: SLIDER_WIDTH - 60,
        backgroundColor: "grey",
        borderRadius: 8,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    }
});

export default MyCarousel;

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mobx, { observer, inject } from 'mobx-react/native';
import Store from './store.js';

@observer
class Main extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.countView}>
                    <Text>
                        Count: {Store.count}
                    </Text>
                </View>

                <View style={styles.secondRowView}>

                    <View style={styles.firstNameView}>
                        <Text>
                            FirstName: {Store.fname[0]}
                        </Text>
                    </View>

                    <View style={styles.lastNameView}>
                        <Text>
                            LastName: {Store.lname[0]}
                        </Text>
                    </View>

                </View>

                <View style={styles.thirdRowView}>

                    <View style={styles.mailView}>
                        <Text style={styles.mailText}>
                            E-mail: {Store.mail[0]}
                        </Text>
                    </View>

                    <View style={styles.phoneView}>
                        <Text>
                            Phone: {Store.phone[0]}
                        </Text>
                    </View>

                </View>

                <View style={styles.fullNameView}>
                    <Text>
                        Full Name: {Store.fullname}
                    </Text>
                </View>

                <View style={styles.funcsRowView}>

                    <View style={styles.funcsView}>
                        <TouchableOpacity onPress={() => Store.increment()}>
                            <Text style={styles.incrementText}>
                                Increment Counter
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.funcsView}>
                        <TouchableOpacity onPress={() => Store.decrement()}>
                            <Text style={styles.decrementText}>
                                Decrement Counter
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.funcsRowView}>

                    <View style={styles.funcsView}>
                        <TouchableOpacity onPress={Store.changeFirstName}>
                            <Text>
                                Change First Name
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.funcsView}>
                        <TouchableOpacity onPress={Store.changeLastName}>
                            <Text>
                                Change Last Name
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.funcsRowView}>

                    <View style={styles.funcsView}>
                        <TouchableOpacity onPress={Store.changeMail}>
                            <Text>
                                Change E-Mail
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.funcsView}>
                        <TouchableOpacity onPress={Store.changePhone}>
                            <Text>
                                Change Phone
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    countView: {
        flex: 2,
        backgroundColor: "#f44280",
        justifyContent: "center",
        alignItems: "center"
    },
    secondRowView: {
        flex: 3,
        flexDirection: "row"
    },
    firstNameView: {
        flex: 1,
        backgroundColor: "#707fc1",
        justifyContent: "center",
        alignItems: "center"
    },
    lastNameView: {
        flex: 1,
        backgroundColor: "#70c1ab",
        justifyContent: "center",
        alignItems: "center"
    },
    thirdRowView: {
        flex: 3,
        flexDirection: "row"
    },
    mailView: {
        flex: 1,
        backgroundColor: "#d6ada2",
        justifyContent: "center",
        alignItems: "center"
    },
    phoneView: {
        flex: 1,
        backgroundColor: "#b6d6a2",
        justifyContent: "center",
        alignItems: "center"
    },
    fullNameView: {
        flex: 2,
        backgroundColor: "#d942f4",
        justifyContent: "center",
        alignItems: "center"
    },
    funcsRowView: {
        flex: 2,
        flexDirection: "row"
    },
    funcsView: {
        flex: 1,
        backgroundColor: "#eeefed",
        justifyContent: "center",
        alignItems: "center"
    },
    incrementText: {
        color: "blue"
    },
    decrementText: {
        color: "red"
    },
    mailText: {
        fontSize: 12
    }
}

export default Main;
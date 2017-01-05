// @flow

import React from 'react'
import { View, ListView, Text } from 'react-native'
import { connect } from 'react-redux'

// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/LearnStyle'

class ListviewSectionsExample extends React.Component {

  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = {
      first: [
        {title: 'First Soundtrack', description: 'First Description'},
        {title: 'Second Soundtrack', description: 'Second Description'},
        {title: 'Third Soundtrack', description: 'Third Description'},
        {title: 'Fourth Soundtrack', description: 'Fourth Description'},
        {title: 'Fifth Soundtrack', description: 'Fifth Description'},
        {title: 'Sixth Soundtrack', description: 'Sixth Description'},
        {title: 'Seventh Soundtrack', description: 'Seventh Description'},
        {title: 'Eighth Soundtrack', description: 'Eighth Description'},
        {title: 'Ninth Soundtrack', description: 'Ninth Description'},
        {title: 'Tenth Soundtrack', description: 'Tenth Description'}
      ],
      second: [
        {title: '11th Soundtrack', description: 'Eleventh Description'},
        {title: '12th Soundtrack', description: '12th Description'},
        {title: '13th Soundtrack', description: '13th Description'},
        {title: '14th Soundtrack', description: '14th Description'},
        {title: '15th Soundtrack', description: '15th Description'},
        {title: '16th Soundtrack', description: '16th Description'},
        {title: '17th Soundtrack', description: '17th Description'},
        {title: '18th Soundtrack', description: '18th Description'},
        {title: '19th Soundtrack', description: '19th Description'},
        {title: '20th Soundtrack', description: '20th Description'}
      ]
    }
    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *   The same goes for sectionHeaderHasChanged
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData, sectionID) {
    // You can condition on sectionID (key as string), for different cells
    // in different sections
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.title}</Text>
        <Text style={styles.label}>{rowData.description}</Text>
        <Text style={styles.label}>{sectionID.toUpperCase()} PLAYLIST</Text>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRowsAndSections` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  renderHeader (data, sectionID) {
    switch (sectionID) {
      case 'first':
        return <Text style={styles.boldLabel}>First Playlist</Text>
      default:
        return <Text style={styles.boldLabel}>Second Playlist</Text>
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this.noRowData()} />
        <ListView
          renderSectionHeader={this.renderHeader}
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListviewSectionsExample)

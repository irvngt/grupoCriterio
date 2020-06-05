import React from 'react';

const { FormatMoney } = require('format-money-js');

/**
*
* Props:
* Fields
* ¿Es cabezal o no?
*
*/
export default class Row extends React.Component{

  onClick(key){
    this.props.orderData(key);
  }

  render(){
    let self = this;

    let isHeader = this.props.isHeader;
    let fields = this.props.fields;

    let elementClassName = ['table_row'];
    if(isHeader){
      elementClassName.push('isheader');
    }

    if(this.props.isEven){
      elementClassName.push('iseven');
    }

    return(
      <div className={elementClassName.join(' ')}>
        {
          fields.map(function(obj){
            return(
              <Cell
                data={obj}
                onClick={(k) => self.onClick(k)}
                livesInHeader={isHeader}
                order={self.props.order}
                orderby={self.props.orderby}
              />
            )
          })
        }
      </div>
    )
  }
}

class Cell extends React.Component{

  formatValue(){
    let value = this.props.data.value;
    if(this.props.livesInHeader){
      return value;
    }

    let type = this.props.data.type;

    switch(type){
      case "text":
        return value;
      break;
      case "currency":
        const fm = new FormatMoney({
                    decimals: 1
                   });
        return fm.from(value, { symbol: '$' })
      break;
      case "age":
        value = parseInt(value);
        return value + ' año' + (value === 1 ? '' : 's');
      break;
    }
  }

  onClick(){
    if(this.props.livesInHeader){
      this.props.onClick(this.props.data.key);
    }
  }

  render(){
    return(
      <div
        className="table_row_cell"
        onClick={() => this.onClick()}
      >
        {this.formatValue()}

        {
          (this.props.orderby == this.props.data.key) ?
            <i className="material-icons">{this.props.order == "asc" ? "arrow_drop_up" : "arrow_drop_down"}</i>
          : null
        }


      </div>
    )
  }
}

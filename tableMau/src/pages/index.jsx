import React from 'react';
import {getEmployees} from '../funcs/employees';
import Row from '../components/row';

export default class Index extends React.Component{
  state = {
    employees: [],
    orderby: 'employee_name',
    order: 'asc',
    ageAvg: 0,
    salaryAvg: 0,
    salaryTotal: 0
  }

  componentDidMount(){
    this.get();
  }

  async get(){
    let response = await getEmployees();
    this.order(response);
    this.setStats(response);
  }

  setStats(employees){
    let total = 0;
    employees.map(function(employee){
      total += parseInt(employee.employee_age)
    })
    let ageAvg = total / employees.length;
        ageAvg = Math.round(ageAvg);

    let totalSalary = 0;
    employees.map(function(employee){
      totalSalary += parseFloat(employee.employee_salary);
    })

    totalSalary = Math.round(totalSalary * 10) / 10;

    let salaryAvg = totalSalary / employees.length;


    this.setState({
      ageAvg,
      salaryAvg,
      totalSalary
    })

  }

  order(employees){
    let self = this;
    employees.sort(function(a, b){
      let a_value = a[self.state.orderby];
          a_value = !isNaN(a_value) ? +a_value : a_value;
      let b_value = b[self.state.orderby];
          b_value = !isNaN(b_value) ? +b_value : b_value;




      let mult = self.state.order == 'asc' ? 1 : -1;
      return a_value > b_value ? 1 * mult : -1 * mult;
    });
    this.setState({
      employees: employees
    })

  }

  orderData(key){
    let self = this;
    this.setState({
      orderby: key
    })

    if(key == this.state.orderby){
      this.setState({
        order: this.state.order == "asc" ? 'desc' : 'asc'
      })


    }


    setTimeout(function(){
      self.order(self.state.employees);
    }, 50);


  }
  kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }

  render(){
    let self = this;
    let fields = [
      {
        value: 'Nombre completo',
        key: "employee_name",
        type: 'text'
      },
      {
        value: 'Salario',
        key: "employee_salary",
        type: 'currency'
      },
      {
        value: 'Edad',
        key: "employee_age",
        type: 'age'
      }
    ];

    let stats = [
      {
        name: 'Promedio de edad',
        key: 'ageAvg'
      },
      {
        name: 'Promedio de salario',
        key: 'salaryAvg'
      },
      {
        name: 'Total pagado',
        key: 'totalSalary'
      }
    ];

    if(!this.state.employees){
      return null;
    }

    return(
      <div className="page">
        <div className="stats">
          {
            stats.map(function(stat){
              let isCurrency = stat.key.indexOf('alary') > -1;
              let value = self.state[stat.key];

              if(isCurrency){
                value = '$'+ self.kFormatter(value);
              }

              return(
                <div className="stats_stat">
                  <div className="stats_stat_cipher">{value}</div>
                  <div className="stats_stat_label">{stat.name}</div>
                </div>
              )

            })
          }

        </div>
        <div className="table">
          <Row
            orderby={this.state.orderby}
            order={this.state.order}
            isHeader={true}
            orderData={(key) => this.orderData(key)}
            fields={fields}
          />

          {
            this.state.employees.map(function(obj, y){
              let fieldsCopy = [
                  {
                    value: 'Nombre completo',
                    key: "employee_name",
                    type: 'text'
                  },
                  {
                    value: 'Salario',
                    key: "employee_salary",
                    type: 'currency'
                  },
                  {
                    value: 'Edad',
                    key: "employee_age",
                    type: 'age'
                  }
              ];
              for(let i = 0; i < fieldsCopy.length; i++){
                let key = fieldsCopy[i].key;
                let value = obj[key];
                fieldsCopy[i].value = value;
              }

              return(
                <Row
                  isHeader={false}
                  fields={fieldsCopy}
                  isEven={y % 2 == 0}
                />
              )
            })
          }

        </div>
      </div>
    )
  }
}

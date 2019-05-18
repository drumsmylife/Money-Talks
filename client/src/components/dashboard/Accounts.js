import React, { Component } from "react";
import PropTypes from "prop-types";
import PlaidLinkButton from "react-plaid-link-button";
import { connect } from "react-redux";
import {
  getTransactions,
  addAccount,
  deleteAccount
} from "../../actions/accountActions";
import { logoutUser } from "../../actions/authActions";
import MaterialTable from "material-table"; // https://mbrn.github.io/material-table/#/
import Card from "../Card";
let i = Math.floor(Math.random()*50);
const giphyAPI = "JXkpKRAmyWWfdABgWzYBU3qlPkzbVD2q";
let giphySearchTerm = "watch+your+money";

class Accounts extends Component {
  componentDidMount() {
    const { accounts } = this.props;
    this.props.getTransactions(accounts);
    this.fetchGifs();
  }

  
    
  

   
    fetchGifs(){
        
        
        const giphyEndpoint = `http://api.giphy.com/v1/gifs/search?q=${giphySearchTerm}&api_key=${giphyAPI}&limit=50`;
        fetch(giphyEndpoint)
        .then(res => res.json())
        .then(gifs => {
            console.log(gifs.data[i].images.downsized.url)
            console.log(gifs.data.length)
            
            this.setState({
                isLoaded: true,
                gifs: gifs.data[i].images.downsized.url,
            })
        });
    }

  constructor(props){
    super(props);

    this.state = {
        gifs: [],
        isLoaded: false
    }
  }  
// Add account
  handleOnSuccess = (token, metadata) => {
    const { accounts } = this.props;
    const plaidData = {
      public_token: token,
      metadata: metadata,
      accounts: accounts
    };
this.props.addAccount(plaidData);
  };
// Delete account
  onDeleteClick = id => {
    const { accounts } = this.props;
    const accountData = {
      id: id,
      accounts: accounts
    };
    this.props.deleteAccount(accountData);
  };
// Logout
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user, accounts } = this.props;
    const { transactions, transactionsLoading } = this.props.plaid;
let accountItems = accounts.map(account => (
      <li key={account._id} style={{ marginTop: "1rem" }}>
        <button
          style={{ marginRight: "1rem" }}
          onClick={this.onDeleteClick.bind(this, account._id)}
          className="btn btn-small btn-floating waves-effect waves-light hoverable red accent-3"
        >
          <i className="material-icons">delete</i>
        </button>
        <b>{account.institutionName}</b>
      </li>
    ));

    //SOMEHOW NEED TO GET THE BALANCE TO SHOW LIKE TRANSACTIONS DID
// Setting up data table
    const transactionsColumns = [
      { title: "Account", field: "account" },
      { title: "Date", field: "date", type: "date", defaultSort: "desc" },
      { title: "Name", field: "name" },
      { title: "Amount", field: "amount" },
      { title: "Category", field: "category" }
    ];

    function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
  }

  // let category = "";

    let transactionsTravel = 0.00;
    transactions.forEach(function(account) {
      account.transactions.forEach(function(transaction) {
        if(transaction.category[0] === 'Travel'){
        transactionsTravel = round(transactionsTravel+transaction.amount, 2);
        };
      });
    });      
        console.log("This is Travel:", transactionsTravel);

    let transactionsFoodandDrink = 0.00;
    transactions.forEach(function(account) {
      account.transactions.forEach(function(transaction) {
        if(transaction.category[0] === 'Food and Drink'){
          transactionsFoodandDrink = round(transactionsFoodandDrink+transaction.amount, 2);
          };
      });
    });
    console.log("This is Food and Drinks:", transactionsFoodandDrink);

    let transactionsPayment = 0.00;
    transactions.forEach(function(account) {
      account.transactions.forEach(function(transaction) {
        if(transaction.category[0] === 'Payment'){
          transactionsPayment = round(transactionsPayment+transaction.amount, 2);
          };
      });
    });
    console.log("This is payment:", transactionsPayment);

    let transactionsShops = 0.00;
    transactions.forEach(function(account) {
      account.transactions.forEach(function(transaction) {
        if(transaction.category[0] === 'Shops'){
          transactionsShops = round(transactionsShops+transaction.amount, 2);
          };
      });
    });
    console.log("This is Shops:",transactionsShops);

    let transactionsTransfer = 0.00;
    transactions.forEach(function(account) {
      account.transactions.forEach(function(transaction) {
        if(transaction.category[0] === 'Transfer'){
          transactionsTransfer = round(transactionsTransfer+transaction.amount, 2);
          };
        
      });
    });
    console.log("This is Transfer",transactionsTransfer);

    let transactionsRecreation = 0.00;
    transactions.forEach(function(account) {
      account.transactions.forEach(function(transaction) {
        if(transaction.category[0] === 'Recreation'){
          transactionsRecreation = round(transactionsRecreation+transaction.amount, 2);
        };
      });
    });
    console.log("This is Recreation:", transactionsRecreation);

let transactionsData = [];
    transactions.forEach(function(account) {
      account.transactions.forEach(function(transaction) {
        transactionsData.push({
          account: account.accountName,
          date: transaction.date,
          category: transaction.category[0],
          name: transaction.name,
          amount: transaction.amount
        });
      });
    });
return (
    <div className="container">
      
      <div className="row">
        <div className="col s12">
          <button
            onClick={this.onLogoutClick}
            className="btn-flat waves-effect"
          >
            <i className="material-icons left">←</i> Log Out
          </button>
          <br/><br/>
          <h4>
            <b>Welcome!</b>
          </h4>
          <p className="grey-text text-darken-1">
            Hey there, {user.name.split(" ")[0]}
          </p>
          
          <h5>
            <b>Linked Accounts</b>
          </h5>
          <p className="grey-text text-darken-1">
            Add or remove your bank accounts below
          </p>
          <ul>{accountItems}</ul>
          <PlaidLinkButton
            buttonProps={{
              className:
                "btn btn-large waves-effect waves-light hoverable blue accent-3 main-btn"
            }}
            plaidLinkProps={{
              clientName: "MoneyTalks",
              key: "d91f183971b1a8d257dfcdcffe2cd3",
              env: "sandbox",
              product: ["transactions"],
              onSuccess: this.handleOnSuccess
            }}
            onScriptLoad={() => this.setState({ loaded: true })}
          >
            Add Account
          </PlaidLinkButton>
          <hr style={{ marginTop: "2rem", opacity: ".2" }} />
          <div className="row" >
            <img src={this.state.gifs} alt="gif" style={{ margin:"auto"}}/>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Card total={transactionsRecreation} category={"Recreation"}/>
              <Card total={transactionsTravel} category={"Travel"}/>
              <Card total={transactionsTransfer} category={"Transfer"}/>
            </div>
            <div className="col-md-6">
              <Card total={transactionsPayment} category={"Payment"}/>
              <Card total={transactionsShops} category={"Shops"}/>
              <Card total={transactionsFoodandDrink} category={"Food and Drink"}/>
            </div>
          </div>
          <br/><br/>
          <h5>
            <b>Transactions</b>
          </h5>
          {transactionsLoading ? (
            <p className="grey-text text-darken-1">Fetching transactions...</p>
          ) : (
            <>
              <p className="grey-text text-darken-1">
                You have <b>{transactionsData.length}</b> transactions from your
                <b> {accounts.length}</b> linked
                {accounts.length > 1 ? (
                  <span> accounts </span>
                ) : (
                  <span> account </span>
                )}
                from the past 30 days
              </p>
              <MaterialTable
                columns={transactionsColumns}
                data={transactionsData}
                title="Search Transactions"
              />
            </>
          )}
        </div>
      </div>
    </div>
    );
  }
}
Accounts.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getTransactions: PropTypes.func.isRequired,
  addAccount: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  plaid: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  plaid: state.plaid
});
export default connect(
  mapStateToProps,
  { logoutUser, getTransactions, addAccount, deleteAccount }
)(Accounts);
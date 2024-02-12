class Customer {
    constructor(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDiscount() {
        return this.discount;
    }

    toString() {
        return `Customer[id=${this.id}, name=${this.name}, discount=${this.discount}]`;
    }
}

class Invoice {
    constructor(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
  
    getId() {
        return this.id;
    }
  
    getCustomer() {
        return this.customer;
    }
  
    setCustomer(customer) {
        this.customer = customer;
    }
  
    getAmount() {
        return this.amount;
    }
  
    setAmount(amount) {
        this.amount = amount;
    }
  
    getCustomerId() {
        return this.customer.getId();
    }
  
    getCustomerName() {
        return this.customer.getName();
    }
  
    getCustomerDiscount() {
        return this.customer.getDiscount();
    }
  
    getAmountAfterDiscount() {
        const discount = this.customer.getDiscount() / 100;
        return this.amount - (this.amount * discount);
    }

    getDiscountSystem() {
        return `${this.customer.getDiscount()}%`; 
    }
  
    toString() {
        return `Invoice[id=${this.id}, customer=${this.customer.toString()}, amount=${this.amount}]`;
    }
}


// การใช้งาน
const customer = new Customer(1, "John Doe", 10); // สร้างลูกค้า
const invoice = new Invoice(1001, customer, 500); // สร้างใบแจ้งหนี้

// แสดงมูลค่าใบแจ้งหนี้
console.log(`Amount: ${invoice.getAmount()}`);


import React from 'react';
import SupportPage from './component';

export default {
  title: 'Pages/Support/Search',
  component: SupportPage,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: '#F5F5F5' },
      ],
    },
  }
};

const Template = ({...args}) => <SupportPage {...args} />

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  results: [],
  searchActions: {
    onChange: (e, setValue) => {
      setValue(e.target.value)
    },
    onSubmit: () => alert('Submitted')
  }
}
APrimary.storyName = '01. No Search Conducted'

export const BSecondary = Template.bind({})
BSecondary.args = {
  classes: [],
  results: [
    {key: 'row1', columns:[{key: '90129', value:'90129'}, {key: 'John', value:'John'}, {key: 'Smith1', value:'Smith'}, {key: '1', value:'300-555-1234'}, {key: 'b1', value:'2/9/1995'}, {key: 'a1', value: 'View Details', class:'action'}]},
    {key: 'row2', columns:[{key: '68186', value:'68186'}, {key: 'Alexa', value:'Alexa'}, {key: 'Smith2', value:'Smith'}, {key: '2', value:'300-555-1234'}, {key: 'b2', value:'6/4/1992'}, {key: 'a2', value: 'View Details', class: 'action'}]}
  ],
  details: undefined,
  searchActions: {
    onChange: (e, setValue) => setValue(e.target.value),
    onSubmit: () => alert('Submitted')
  }
}
BSecondary.storyName = '02. With Search Results'

export const CTertiary = Template.bind({})
CTertiary.args = {
  classes: [],
  results: [
    {key: 'row1', columns:[{key: '90129', value:'90129'}, {key: 'John', value:'John'}, {key: 'Smith1', value:'Smith'}, {key: '1', value:'300-555-1234'}, {key: 'b1', value:'2/9/1995'}, {key: 'a1', value: 'View Details', class:'action'}]},
    {key: 'row2', columns:[{key: '68186', value:'68186'}, {key: 'Alexa', value:'Alexa'}, {key: 'Smith2', value:'Smith'}, {key: '2', value:'300-555-1234'}, {key: 'b2', value:'6/4/1992'}, {key: 'a2', value: 'View Details', class: 'action'}]}
  ],
  details: {
    user: {
      userId: '90129',
      firstName: 'John',
      lastName: 'Smith',
      phone: '9893758973',
      email: 'j.smith@gmail.com',
      status: 'Meal Options Prescribed by RD',
      language: 'English',
      dateOfBirth: '02/09/1995',
      zip: '11207',
      eligibilities: ['Groceries', 'Housing Services'],
      locations: {
        primary: '100 New Jersey Avenue Brooklyn, New York, 11207',
        locations: [
          '500 Star Street Tampa, Florida, 33601',
          '120 Star Street Tampa, Florida, 33601'
        ]
      }
    },
    notes: {
      rows: [{
        key: "row1",
        columns: [{
          key: "row1col1",
          value: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
        },{
          key: "ro1col2",
          value: "Refund type",
        },{
          key: "row1col3",
          value: "Admin",
        },{
          key: "ro1cnol4",
          value: "1/13/2023",
        }]
      }]
    },
    events: {
      rows: [{
        key: "row1",
        columns: [{
          key: "events_row1col1",
          value: "Eligible",
        },{
          key: "events_ro1col2",
          value: "8/4/2020 09:44 AM",
        }]
      },{
        key: "row2",
        columns: [{
          key: "events_row2col1",
          value: "Registered",
        },{
          key: "events_ro2col2",
          value: "7/8/2020 09:44 AM",
        }]
      },]
    },
    orders: {
      orderTotalCount: 12,
      orders: [{
        orderNumber: '02918',
        orderStatus: 'Out for Delivery',
        meal: ['Mexican Box, Tilapia, Couscous'],
        benefit: 'CalOptima',
        funder: 'Tangelo',
        expectedDelivery: '4/16/2023',
        issueCreated: '---',
        trackingNumber: '87260167618',
        trackingLink: 'https://fedex.com?tracking=87260167618',
      }],
      currentCount: 1,
      upcomingCount: 8,
      pastCount: 3,
    },    
    contacts: {
      rows: [{
        key: "contacts_row1",
        columns: [{
          key: "contacts_ro1col1",
          value: "12/15/2022"
        },{
          key: "contacts_ro1col2",
          value: "00:56"
        },{
          key: "contacts_ro1col3",
          value: "Support Call"
        },{
          key: "contacts_ro1col4",
          value: "Admin"
        },{
          key: "contacts_ro1col5",
          value: "Ryan Ally"
        },{
          key: "contacts_ro1col6",
          value: "Reorder box"
        }]
      },{
        key: "contacts_row2",
        columns: [{
          key: "contacts_ro2col1",
          value: "12/15/2022"
        },{
          key: "contacts_ro2col2",
          value: "05:56"
        },{
          key: "contacts_ro2col3",
          value: "RD Assessment"
        },{
          key: "contacts_ro2col4",
          value: "Admin"
        },{
          key: "contacts_ro2col5",
          value: "Nick Joe"
        },{
          key: "contacts_ro2col6",
          value: "Resolved"
        }]
      }]
    },
    rd: {
      assessmentId: 'CO- 1.1',
      details: 'RD Assessment Topic',
    },
    feedback: [{
      summary: 'I love my box of seasonal fruits & vegetables.',
      date: '1/5/2023',
      details:'I love this program the timing was perfect. Getting these fruits & vegetables has enhanced my eating habits with fresh wholesome foods. So far I have found that the variety is good, the amounts are sufficient, and the items are fresh & appealing.',
    }],
    payments: {
      rows: [{
        key: "payments_row1",
        columns: [{
          key: "payments_ro1col1",
          value: "091241"
        },{
          key: "payments_ro1col2",
          value: "12/15/2023"
        },{
          key: "payments_ro1col3",
          value: "TNIB"
        },{
          key: "payments_ro1col4",
          value: "12"
        },{
          key: "payments_ro1col5",
          value: "SNAP"
        },{
          key: "payments_ro1col6",
          value: "$50.00"
        },{
          key: "payments_ro1col7",
          value: "Paid"
        }]
      },{
        key: "payments_row2",
        columns: [{
          key: "payments_ro2col1",
          value: "98713"
        },{
          key: "payments_ro2col2",
          value: "4/20/2023"
        },{
          key: "payments_ro2col3",
          value: "TNIB"
        },{
          key: "payments_ro2col4",
          value: "24"
        },{
          key: "payments_ro2col5",
          value: "Tangelo Wallet"
        },{
          key: "payments_ro2col6",
          value: "$50.00"
        },{
          key: "payments_ro2col7",
          value: "Paid"
        }]
      },{
        key: "payments_row3",
        columns: [{
          key: "payments_ro3col1",
          value: "124541"
        },{
          key: "payments_ro3col2",
          value: "3/28/2023"
        },{
          key: "payments_ro3col3",
          value: "TNIB"
        },{
          key: "payments_ro3col4",
          value: "12"
        },{
          key: "payments_ro3col5",
          value: "Multiple"
        },{
          key: "payments_ro3col6",
          value: "$50.00"
        },{
          key: "payments_ro3col7",
          value: "Paid"
        }]
      }]
    },
    benefits: {
      rows: [{
        key: "benefits_row1",
        columns: [{
          key: "benefits_ro1col1",
          value: "TNIB"
        },{
          key: "benefits_ro1col2",
          value: "12/15/2023"
        },{
          key: "benefits_ro1col3",
          value: "3/23/2024"
        },{
          key: "benefits_ro1col4",
          value: "In process"
        },{
          key: "benefits_ro1col5",
          value: "12 / 50"
        },{
          key: "benefits_ro1col6",
          value: "Cancel"
        }]
      },{
        key: "benefits_row2",
        columns: [{
          key: "benefits_ro2col1",
          value: "TNIB"
        },{
          key: "benefits_ro2col2",
          value: "5/01/2021"
        },{
          key: "benefits_ro2col3",
          value: "1/10/2023"
        },{
          key: "benefits_ro2col4",
          value: "Completed"
        },{
          key: "benefits_ro2col5",
          value: "50 / 50"
        },{
          key: "benefits_ro2col6",
          value: ""
        }]
      }]
    },
  },
  detailActions: {
    dataFetch: (userId, component) => false
  },
  searchActions: {
    onChange: (e, setValue) => setValue(e.target.value),
    onSubmit: () => alert('Submitted')
  }
}
CTertiary.storyName = '03. With Details'
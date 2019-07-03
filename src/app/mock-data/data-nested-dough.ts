const data = {
  chart: {
    caption: 'Sales by Product Category',
    subcaption: 'Last Quarter',
    showplotborder: '1',
    plotfillalpha: '60',
    hoverfillcolor: '#CCCCCC',
    numberprefix: '$',
    plottooltext:
      'Sales of <b>$label</b> was <b>$$valueK</b>, which was $percentValue of parent category',
    theme: 'fusion'
  },
  category: [
    {
      label: 'Products',
      tooltext: 'Please hover over a sub-category to see details',
      color: '#ffffff',
      value: '25000',
      category: [
        {
          label: 'Product One',
          color: '#f8bd19',
          value: '15000',
          category: [
            {
              label: 'Solarbreeze',
              value: '4100'
            },
            {
              label: 'Duobam',
              value: '3800'
            },
            {
              label: 'Asoka',
              value: '5200'
            },
            {
              label: 'Bigrax',
              value: '2400'
            },
          ]
        },
        {
          label: 'Product Two',
          color: '#33ccff',
          value: '24800',
          category:
            [
              {
                label: 'Bamity',
                value: '4100'
              },
              {
                label: 'Subin',
                value: '5400'
              },
              {
                label: 'Toughjoyfax',
                value: '5200'
              },
              {
                label: 'Lotlux',
                value: '5200'
              },
              {
                label: 'Zontax',
                value: '2300'
              },
              {
                label: 'Domainer',
                value: '3800'
              },
              {
                label: 'Redhold',
                value: '1345'
              },
            ]
        },
        {
          label: 'Product Three',
          color: '#ffcccc',
          value: '36800',
          category:
            [
              {
                label: 'Andalaz',
                value: '12340'
              },
              {
                label: 'Ventosanzap',
                value: '3900'
              },
              {
                label: 'Quo Lux',
                value: '8010'
              },
              {
                label: 'Finton',
                value: '1400'
              },
              {
                label: 'Keylex',
                value: '2200'
              },
              {
                label: 'Matsoft',
                value: '7100'
              },
              {
                label: 'Lotstring',
                value: '2308'
              },
              {
                label: 'Alpha',
                value: '2400'
              },
              {
                label: 'Cardguard',
                value: '3456'
              },
            ]
        },
        {
          label: 'Product-4',
          color: '#ffcccc',
          value: '33980',
          category:
            [
              {
                label: 'Konklux',
                value: '3900'
              },
              {
                label: 'Treehug',
                value: '1010'
              },
              {
                label: 'Greenlam',
                value: '7400'
              },
              {
                label: 'Sub-ex',
                value: '2900'
              },
              {
                label: 'Regrant',
                value: '1100'
              },
              {
                label: 'Flowdesk',
                value: '4308'
              },
              {
                label: 'Wrapsafe',
                value: '4400'
              },
              {
                label: 'Overhold',
                value: '6200'
              },
            ]
        },
        {
          label: 'Product-VIP',
          value: '27880',
          category:
            [
              {
                label: 'Doomtr',
                value: '6900'
              },
              {
                label: 'Fixflex',
                value: '6900'
              },
              {
                label: 'Zathin',
                value: '7345'
              },
              {
                label: 'Drain-brain',
                value: '3900'
              },
            ]
        },
      ]
    }
  ]
};

// type: "multilevelpie",
//   renderAt: "chart-container",
//   width: "100%",
//   height: "100%",
//   dataFormat: "json",
//   dataSource

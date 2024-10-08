const items = [
  {
    id: 1,
    accountNo: "000000001",
    name: "far",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 3, 10],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".1.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 3, 10],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 3, 10],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 2,
    accountNo: "000000002",
    name: "Test Group",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 3, 18],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".2.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 3, 18],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 3, 18],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 3,
    accountNo: "000000003",
    name: "New Group",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".3.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 7,
    accountNo: "000000007",
    name: "Test Group 1",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".7.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 9,
    accountNo: "000000009",
    name: "Test Group 3",
    status: {
      id: 100,
      code: "clientStatusType.pending",
      value: "Pending",
    },
    active: false,
    officeId: 1,
    officeName: "OneBank",
    centerId: 43,
    centerName: "Unified",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".43.9.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
    },
  },
  {
    id: 10,
    accountNo: "000000010",
    name: "Test Group 4",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".10.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 11,
    accountNo: "000000011",
    name: "Test Group 5",
    status: {
      id: 100,
      code: "clientStatusType.pending",
      value: "Pending",
    },
    active: false,
    officeId: 1,
    officeName: "OneBank",
    centerId: 43,
    centerName: "Unified",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".43.11.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
    },
  },
  {
    id: 13,
    accountNo: "000000013",
    name: "Test Group 6",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".13.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 15,
    accountNo: "000000015",
    name: "Test Group 7",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".15.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 16,
    accountNo: "000000016",
    name: "Test Group 8",
    status: {
      id: 100,
      code: "clientStatusType.pending",
      value: "Pending",
    },
    active: false,
    officeId: 1,
    officeName: "OneBank",
    hierarchy: ".16.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
    },
  },
  {
    id: 17,
    accountNo: "000000017",
    name: "Test Group 9",
    status: {
      id: 100,
      code: "clientStatusType.pending",
      value: "Pending",
    },
    active: false,
    officeId: 1,
    officeName: "OneBank",
    hierarchy: ".17.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
    },
  },
  {
    id: 18,
    accountNo: "000000018",
    name: "Test Group 10",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".18.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 19,
    accountNo: "000000019",
    name: "Test Group 11",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".19.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 20,
    accountNo: "000000020",
    name: "Test Group 12",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".20.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 21,
    accountNo: "000000021",
    name: "Test Group 13",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".21.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 22,
    accountNo: "000000022",
    name: "Test Group 14",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".22.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 24,
    accountNo: "000000024",
    name: "Test Group 16",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".24.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 25,
    accountNo: "000000025",
    name: "Test Group 17",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".25.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 26,
    accountNo: "000000026",
    name: "Test Group 18",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    hierarchy: ".26.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 27,
    accountNo: "000000027",
    name: "Test Group 19",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".27.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 28,
    accountNo: "000000028",
    name: "Test Group 20",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".28.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 29,
    accountNo: "000000029",
    name: "Test Group 21",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".29.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 30,
    accountNo: "000000030",
    name: "Test Group 22",
    status: {
      id: 100,
      code: "clientStatusType.pending",
      value: "Pending",
    },
    active: false,
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".30.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
    },
  },
  {
    id: 31,
    accountNo: "000000031",
    name: "Test Group 23",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".31.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 32,
    accountNo: "000000032",
    name: "Test Group 24",
    status: {
      id: 100,
      code: "clientStatusType.pending",
      value: "Pending",
    },
    active: false,
    officeId: 1,
    officeName: "OneBank",
    hierarchy: ".32.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
    },
  },
  {
    id: 33,
    accountNo: "000000033",
    name: "Test Group 25",
    status: {
      id: 100,
      code: "clientStatusType.pending",
      value: "Pending",
    },
    active: false,
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".33.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
    },
  },
  {
    id: 34,
    accountNo: "000000034",
    name: "choosepick",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 10],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".34.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 10],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 10],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 35,
    accountNo: "000000035",
    name: "newton",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 19],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".35.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 19],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 19],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 37,
    accountNo: "000000037",
    name: "Rockeeb",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 5, 2],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".37.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 5, 2],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 5, 2],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 44,
    accountNo: "000000044",
    name: "teste 1",
    externalId: "2",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 7, 3],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".44.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 7, 3],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 7, 3],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 45,
    accountNo: "000000045",
    name: "G001",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 7, 21],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".45.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 7, 21],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 7, 21],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 46,
    accountNo: "000000046",
    name: "MultiOrg",
    status: {
      id: 100,
      code: "clientStatusType.pending",
      value: "Pending",
    },
    active: false,
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".46.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 8, 16],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
    },
  },
  {
    id: 47,
    accountNo: "000000047",
    name: "Chama Group",
    externalId: "256",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 8, 29],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".47.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 8, 29],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 8, 29],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 48,
    accountNo: "000000048",
    name: "OneBank-GP1",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 8, 31],
    officeId: 1,
    officeName: "OneBank",
    staffId: 1,
    staffName: "Black, Yellow",
    hierarchy: ".48.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 8, 31],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 8, 31],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 8,
    accountNo: "000000008",
    name: "Test Group 2",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 2,
    officeName: "Ojodu office",
    hierarchy: ".8.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 23,
    accountNo: "000000023",
    name: "Test Group 15",
    status: {
      id: 100,
      code: "clientStatusType.pending",
      value: "Pending",
    },
    active: false,
    officeId: 2,
    officeName: "Ojodu office",
    hierarchy: ".23.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
    },
  },
  {
    id: 5,
    accountNo: "000000005",
    name: "New Group 2",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 4, 5],
    officeId: 3,
    officeName: "Lekki office",
    staffId: 2,
    staffName: "Ggg, Yyy",
    hierarchy: ".5.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 4, 5],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 4, 5],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 41,
    accountNo: "000000041",
    name: "Group of India",
    status: {
      id: 100,
      code: "clientStatusType.pending",
      value: "Pending",
    },
    active: false,
    officeId: 3,
    officeName: "Lekki office",
    staffId: 3,
    staffName: "ph, ph",
    hierarchy: ".41.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 5, 31],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
    },
  },
  {
    id: 42,
    accountNo: "000000042",
    name: "Ajor",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 7, 10],
    officeId: 3,
    officeName: "Lekki office",
    staffId: 2,
    staffName: "Ggg, Yyy",
    hierarchy: ".42.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 6, 3],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 7, 10],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
  {
    id: 38,
    accountNo: "000000038",
    name: "Example",
    status: {
      id: 300,
      code: "clientStatusType.active",
      value: "Active",
    },
    active: true,
    activationDate: [2024, 5, 3],
    officeId: 4,
    officeName: "Main office",
    staffId: 5,
    staffName: "Felix, gian",
    hierarchy: ".38.",
    groupLevel: "2",
    timeline: {
      submittedOnDate: [2024, 5, 3],
      submittedByUsername: "mifos",
      submittedByFirstname: "App",
      submittedByLastname: "Administrator",
      activatedOnDate: [2024, 5, 3],
      activatedByUsername: "mifos",
      activatedByFirstname: "App",
      activatedByLastname: "Administrator",
    },
  },
];

export default items;
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "matchId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "team",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Stake",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_team1",
        type: "string"
      },
      {
        internalType: "string",
        name: "_team2",
        type: "string"
      }
    ],
    name: "createMatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_matchId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_team",
        type: "uint256"
      }
    ],
    name: "declareWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_matchId",
        type: "uint256"
      }
    ],
    name: "distributeStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_matchId",
        type: "uint256"
      }
    ],
    name: "getMatch",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      },
      {
        internalType: "string",
        name: "",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "matches",
    outputs: [
      {
        internalType: "string",
        name: "team1",
        type: "string"
      },
      {
        internalType: "string",
        name: "team2",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "team1Stake",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "team2Stake",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "winner",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_matchId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_team",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "stakes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalStakers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
]

  export default abi;
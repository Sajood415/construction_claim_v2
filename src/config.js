export const contractAddress = "0x8d668144be663e457492338D2A6A5ad1931255Fd";

export const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "awardedMoney",
				"type": "string"
			}
		],
		"name": "addclientCommentsCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "grantedExtension",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "completetionDateAfterGrant",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "awardedMoney",
				"type": "string"
			}
		],
		"name": "addclientCommentsDelay",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			}
		],
		"name": "addComments",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "causeOfClaim",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "contractType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "clauseId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "clauseTitle",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "claimDesc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "totalProjectCost",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "claimAmount",
				"type": "string"
			}
		],
		"name": "addCostRelatedClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "causeOfClaim",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "contractType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "clauseId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "clauseTitle",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "claimDesc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "totalProjectDuration",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "projectStartingDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "projectCompletetionDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "delayInDays",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "revisedProjectCompletionDate",
				"type": "uint256"
			}
		],
		"name": "addDelayRelatedClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "claimNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "projectName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "contractorAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "consultantAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "clientAddress",
				"type": "address"
			}
		],
		"name": "addProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "grantRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "renounceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "revokeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "previousAdminRole",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "newAdminRole",
				"type": "bytes32"
			}
		],
		"name": "RoleAdminChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleRevoked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "_clientCommentNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_clientCommentsCost",
		"outputs": [
			{
				"internalType": "string",
				"name": "_awardedMoney",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_clientCommentsDelay",
		"outputs": [
			{
				"internalType": "string",
				"name": "_grantedExtension",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_completetionDateAfterGrant",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_awardedMoney",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_costRelatedClaimprojectList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_causeOfClaim",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_contractType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_clauseId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_clauseTitle",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_claimDesc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_totalProjectCost",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_claimAmount",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_delayRelatedClaimprojectList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_causeOfClaim",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_contractType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_clauseId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_clauseTitle",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_claimDesc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_totalProjectDuration",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_projectStartingDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_projectCompletetionDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_delayInDays",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_revisedProjectCompletionDate",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_projectNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_projects",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_claimNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_projectName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_contractorAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_consultantAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_clientAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_reCommentNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_reComments",
		"outputs": [
			{
				"internalType": "string",
				"name": "_comment",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ADMIN",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DEFAULT_ADMIN_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			}
		],
		"name": "getRoleAdmin",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "hasRole",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "hasRoleClient",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "hasRoleConsultant",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "hasRoleContractor",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
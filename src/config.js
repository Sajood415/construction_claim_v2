export const contractAddress = "0x16297d083D396a651FFFe691cD4ffE5FD6605f79";

export const ABI = [
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
		"inputs": [],
		"name": "_claimNumberGoing",
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
		"inputs": [],
		"name": "_claimNumberGoingTrack",
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_clientCommentsCost",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_sett",
				"type": "bool"
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_clientCommentsDelay",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_sett",
				"type": "bool"
			},
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_costRelatedClaimprojectList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_sett",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_claimNo",
				"type": "uint256"
			},
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
				"name": "_clauseIdAndTitle",
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
			},
			{
				"internalType": "string",
				"name": "_imgUrl",
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_delayRelatedClaimprojectList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_sett",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_claimNo",
				"type": "uint256"
			},
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
				"name": "_clauseIdAndTitle",
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
			},
			{
				"internalType": "string",
				"name": "_imgUrl",
				"type": "string"
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
		"inputs": [],
		"name": "_projectNumberTrack",
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
				"internalType": "bool",
				"name": "_sett",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_projectNum",
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_reComments",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_sett",
				"type": "bool"
			},
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
				"name": "claimNo",
				"type": "uint256"
			},
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
				"name": "clauseIdAndTitle",
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
			},
			{
				"internalType": "string",
				"name": "imgUrl",
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
				"internalType": "uint256",
				"name": "claimNo",
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
				"name": "clauseIdAndTitile",
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
			},
			{
				"internalType": "string",
				"name": "imgUrl",
				"type": "string"
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
				"name": "projectNum",
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
				"internalType": "uint256",
				"name": "projectGoing",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "claimGoing",
				"type": "uint256"
			}
		],
		"name": "checkCommentCostData",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "projectGoing",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "claimGoing",
				"type": "uint256"
			}
		],
		"name": "checkCommentData",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "projectGoing",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "claimGoing",
				"type": "uint256"
			}
		],
		"name": "checkCommentDelayData",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "projectGoing",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "claimGoing",
				"type": "uint256"
			}
		],
		"name": "checkCostData",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "projectGoing",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "claimGoing",
				"type": "uint256"
			}
		],
		"name": "checkDelayData",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "claimGoing",
				"type": "uint256"
			}
		],
		"name": "checkProjectData",
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
		"name": "getProjectNames",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "claimGoing",
				"type": "uint256"
			}
		],
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "claimGoing",
				"type": "uint256"
			}
		],
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "claimGoing",
				"type": "uint256"
			}
		],
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
export const artifacts = {
  MultiOwnerModularAccountFactory: {
    address: "0x000000e92D78D90000007F0082006FDA09BD5f11",
    abi: [
      {
        type: "constructor",
        inputs: [
          { name: "owner", type: "address", internalType: "address" },
          {
            name: "multiOwnerPlugin",
            type: "address",
            internalType: "address",
          },
          {
            name: "implementation",
            type: "address",
            internalType: "address",
          },
          {
            name: "multiOwnerPluginManifestHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "entryPoint",
            type: "address",
            internalType: "contract IEntryPoint",
          },
        ],
        stateMutability: "nonpayable",
      },
      { type: "receive", stateMutability: "payable" },
      {
        type: "function",
        name: "ENTRYPOINT",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "address",
            internalType: "contract IEntryPoint",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "IMPL",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "MULTI_OWNER_PLUGIN",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "acceptOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "addStake",
        inputs: [
          { name: "unstakeDelay", type: "uint32", internalType: "uint32" },
          { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "createAccount",
        inputs: [
          { name: "salt", type: "uint256", internalType: "uint256" },
          { name: "owners", type: "address[]", internalType: "address[]" },
        ],
        outputs: [{ name: "addr", type: "address", internalType: "address" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "getAddress",
        inputs: [
          { name: "salt", type: "uint256", internalType: "uint256" },
          { name: "owners", type: "address[]", internalType: "address[]" },
        ],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "pendingOwner",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "transferOwnership",
        inputs: [
          { name: "newOwner", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "unlockStake",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "withdraw",
        inputs: [
          { name: "to", type: "address", internalType: "address payable" },
          { name: "token", type: "address", internalType: "address" },
          { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "withdrawStake",
        inputs: [
          { name: "to", type: "address", internalType: "address payable" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "event",
        name: "OwnershipTransferStarted",
        inputs: [
          {
            name: "previousOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "newOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
          {
            name: "previousOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "newOwner",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      { type: "error", name: "InvalidAction", inputs: [] },
      { type: "error", name: "InvalidOwner", inputs: [] },
      { type: "error", name: "OwnersArrayEmpty", inputs: [] },
      { type: "error", name: "OwnersLimitExceeded", inputs: [] },
      { type: "error", name: "TransferFailed", inputs: [] },
    ],
    bytecode:
      "0x60808060405260043610156200001f575b5036156200001d57600080fd5b005b600090813560e01c90816356973ee51462000d4957508063715018a61462000d025780637387673214620008f757806379ba5097146200081557806381785dfd14620007cf5780638da5cb5b14620007a7578063bb9fe6bf1462000709578063c23a5cea146200065f578063d9caed121462000455578063e189e3791462000288578063e30c3978146200025f578063e8eb3cc61462000219578063f2fde38b146200019c5763fbb1c3d4036200001057604036600319011262000187578060043563ffffffff81168091036200019957620000fa62000f5c565b6001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27891690813b15620001955782906024604051809481937f0396cb6000000000000000000000000000000000000000000000000000000000835260048301528235905af180156200018a57620001745750f35b6200017f9062000dfa565b620001875780f35b80fd5b6040513d84823e3d90fd5b5050fd5b50fd5b5034620001875760203660031901126200018757620001ba62000de3565b620001c462000f5c565b6001600160a01b03809116908173ffffffffffffffffffffffffffffffffffffffff1960015416176001558254167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e227008380a380f35b5034620001875780600319360112620001875760206040516001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d2789168152f35b5034620001875780600319360112620001875760206001600160a01b0360015416604051908152f35b503462000187576200029a3662000d8e565b909181156200042b57606482116200040157620002b8828462000fdb565b15620003d757620002f9620002dd620003c69360405191829160209788840162000e4f565b0392620002f3601f199485810184528362000e2c565b62001040565b90620003af620003bc8561042c9360405190620003198387018362000e2c565b85825282820195620011318739604051620003858482019282620003787f0000000000000000000000000046000000000151008789797b54fdb500e2a61e866001600160a01b0360609216815260406020820152600060408201520190565b0390810183528262000e2c565b6040519586936200039f868601998a925192839162000ecc565b8401915180938684019062000ecc565b0103808452018262000e2c565b519020906200106e565b6001600160a01b0360405191168152f35b60046040517f49e27cff000000000000000000000000000000000000000000000000000000008152fd5b60046040517f7a64f3a6000000000000000000000000000000000000000000000000000000008152fd5b60046040517f0a5c1dfd000000000000000000000000000000000000000000000000000000008152fd5b50346200018757606036600319011262000187576200047362000de3565b602435906001600160a01b038083168093036200065a5783926200049662000f5c565b80620004e5575082809281924791165af1620004b162000f18565b5015620004bb5780f35b60046040517f90b8ec18000000000000000000000000000000000000000000000000000000008152fd5b9092506040519260208401927fa9059cbb000000000000000000000000000000000000000000000000000000008452166024840152604435604484015260448352608083019183831067ffffffffffffffff8411176200064457848091620005979585604052620005568662000e0f565b602086527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152519082855af16200059062000f18565b916200108e565b80519081159182156200061a575b505015620005b05780f35b608460405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b8192509060209181010312620006405760200151801515810362000640573880620005a5565b5080fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b5034620001875760203660031901126200018757806200067e62000de3565b6200068862000f5c565b6001600160a01b0390817f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27891691823b156200070457602484928360405195869485937fc23a5cea0000000000000000000000000000000000000000000000000000000085521660048401525af180156200018a57620001745750f35b505050fd5b503462000187578060031936011262000187576200072662000f5c565b806001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d278916803b15620001995781906004604051809481937fbb9fe6bf0000000000000000000000000000000000000000000000000000000083525af180156200018a5762000799575080f35b620007a49062000dfa565b80f35b503462000187578060031936011262000187576001600160a01b036020915416604051908152f35b5034620001875780600319360112620001875760206040516001600160a01b037f000000000000000000000000ce0000007b008f50d762d155002600004cd6c647168152f35b503462000187578060031936011262000187576001546001600160a01b0333818316036200088d5773ffffffffffffffffffffffffffffffffffffffff19809216600155825491339083161783553391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b608460405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f74207468652060448201527f6e6577206f776e657200000000000000000000000000000000000000000000006064820152fd5b50346200018757620009093662000d8e565b90929162000918828562000fdb565b15620003d757604051916200092d8362000e0f565b60018352835b6020811062000cf057506200096b620009969394956200095c6040519384926020840162000e4f565b03601f19810183528262000e2c565b620009768462000ea8565b52620009828362000ea8565b506200098e8362000ea8565b519062001040565b604051919061042c620009ad602082018562000e2c565b808452620011319362000a296020820183878239620003af62000a1f60207f0000000000000000000000000046000000000151008789797b54fdb500e2a61e956040518281019062000385816200095c8b856001600160a01b0360609216815260406020820152600060408201520190565b519020846200106e565b94853b1562000a47575b6020866001600160a01b0360405191168152f35b604051928084019184831067ffffffffffffffff84111762000cdc579184939162000a8e9385396001600160a01b0360609216815260406020820152600060408201520190565b039085f5156200018a5760405162000aa68162000e0f565b600181526020368183013762000abc8162000ea8565b6001600160a01b037f000000000000000000000000ce0000007b008f50d762d155002600004cd6c64716905260405162000af68162000e0f565b60018152602081019060203683377f21d0f6cca8bef15ac65bf93ae5ae9ec383ea5010bf3e02b44d3c0abd2d2bd0fb62000b308262000ea8565b5260405193849160608301906040602085015251809152608083019390885b81811062000cc257505050601f19828403016040830152805180845260208401936020808360051b83010193019489915b83831062000c8e575050505062000ba1925003601f19810184528362000e2c565b6001600160a01b0383163b1562000c8a579083906040519283917fe69e24a800000000000000000000000000000000000000000000000000000000835260448301604060048501528251809152602060648501930190855b81811062000c6457505050828203600319016024840152829162000c1d9162000ef1565b0381836001600160a01b0387165af1801562000c59576020935062000c47575b8080808062000a33565b62000c529062000dfa565b3862000c3d565b6040513d85823e3d90fd5b82516001600160a01b031685528996508795506020948501949092019160010162000bf9565b8380fd5b9193600191939550602062000caf8192601f19868203018752895162000ef1565b9701930193019092879492959362000b80565b825186526020958601958895509092019160010162000b4f565b602489634e487b7160e01b81526041600452fd5b80606060208093870101520162000933565b5034620001875780600319360112620001875762000d1f62000f5c565b60046040517f4a7f394f000000000000000000000000000000000000000000000000000000008152fd5b90503462000640578160031936011262000640576020906001600160a01b037f0000000000000000000000000046000000000151008789797b54fdb500e2a61e168152f35b60406003198201126200065a576004359160243567ffffffffffffffff928382116200065a57806023830112156200065a5781600401359384116200065a5760248460051b830101116200065a576024019190565b600435906001600160a01b03821682036200065a57565b67ffffffffffffffff81116200064457604052565b6040810190811067ffffffffffffffff8211176200064457604052565b90601f8019910116810190811067ffffffffffffffff8211176200064457604052565b90916040602092826020820160208352520192916000805b83821062000e7757505050505090565b909192939485356001600160a01b03811680910362000ea457815283019483019392916001019062000e67565b8280fd5b80511562000eb65760200190565b634e487b7160e01b600052603260045260246000fd5b60005b83811062000ee05750506000910152565b818101518382015260200162000ecf565b9060209162000f0c8151809281855285808601910162000ecc565b601f01601f1916010190565b3d1562000f57573d9067ffffffffffffffff821162000644576040519162000f4b601f8201601f19166020018462000e2c565b82523d6000602084013e565b606090565b6001600160a01b0360005416330362000f7157565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b919081101562000eb65760051b0190565b356001600160a01b03811681036200065a5790565b600090815b83831062000ff15750505050600190565b620010086200100284868562000fb5565b62000fc6565b6001600160a01b0391821691161115620010385760016200102f6200100284868562000fb5565b92019162000fe0565b505050600090565b90620010686200095c9160405192839160208301958652604080840152606083019062000ef1565b51902090565b605591600b9160405191604083015260208201523081520160ff81532090565b91929015620010f25750815115620010a4575090565b3b15620010ae5790565b606460405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b825190915015620011065750805190602001fd5b6200112c9060405191829162461bcd60e51b835260206004840152602483019062000ef1565b0390fdfe60406080815261042c908138038061001681610218565b93843982019181818403126102135780516001600160a01b038116808203610213576020838101516001600160401b0394919391858211610213570186601f820112156102135780519061007161006c83610253565b610218565b918083528583019886828401011161021357888661008f930161026e565b813b156101b9577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b031916841790556000927fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8480a28051158015906101b2575b61010b575b855160e790816103458239f35b855194606086019081118682101761019e578697849283926101889952602788527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c87890152660819985a5b195960ca1b8a8901525190845af4913d15610194573d9061017a61006c83610253565b91825281943d92013e610291565b508038808080806100fe565b5060609250610291565b634e487b7160e01b84526041600452602484fd5b50826100f9565b855162461bcd60e51b815260048101859052602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b600080fd5b6040519190601f01601f191682016001600160401b0381118382101761023d57604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161023d57601f01601f191660200190565b60005b8381106102815750506000910152565b8181015183820152602001610271565b919290156102f357508151156102a5575090565b3b156102ae5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156103065750805190602001fd5b6044604051809262461bcd60e51b825260206004830152610336815180928160248601526020868601910161026e565b601f01601f19168101030190fdfe60806040523615605f5773ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54166000808092368280378136915af43d82803e15605b573d90f35b3d90fd5b73ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54166000808092368280378136915af43d82803e15605b573d90f3fea26469706673582212208f3104255ee3c201238ea03e118ee6ec0a2cff51cbfbdc3af1727982a5a959a564736f6c63430008160033a2646970667358221220689623ad71df789b8adddf1a52b12266ccf238b21ea0652b810ac4637c61be3564736f6c63430008160033",
  },
  UpgradeableModularAccount: {
    address: "0x0046000000000151008789797b54fdb500E2a61e",
    abi: [
      {
        type: "constructor",
        inputs: [
          {
            name: "anEntryPoint",
            type: "address",
            internalType: "contract IEntryPoint",
          },
        ],
        stateMutability: "nonpayable",
      },
      { type: "fallback", stateMutability: "payable" },
      { type: "receive", stateMutability: "payable" },
      {
        type: "function",
        name: "entryPoint",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "address",
            internalType: "contract IEntryPoint",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "execute",
        inputs: [
          { name: "target", type: "address", internalType: "address" },
          { name: "value", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [{ name: "result", type: "bytes", internalType: "bytes" }],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "executeBatch",
        inputs: [
          {
            name: "calls",
            type: "tuple[]",
            internalType: "struct Call[]",
            components: [
              { name: "target", type: "address", internalType: "address" },
              { name: "value", type: "uint256", internalType: "uint256" },
              { name: "data", type: "bytes", internalType: "bytes" },
            ],
          },
        ],
        outputs: [
          { name: "results", type: "bytes[]", internalType: "bytes[]" },
        ],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "executeFromPlugin",
        inputs: [{ name: "data", type: "bytes", internalType: "bytes" }],
        outputs: [{ name: "returnData", type: "bytes", internalType: "bytes" }],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "executeFromPluginExternal",
        inputs: [
          { name: "target", type: "address", internalType: "address" },
          { name: "value", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "getExecutionFunctionConfig",
        inputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
        outputs: [
          {
            name: "config",
            type: "tuple",
            internalType: "struct IAccountLoupe.ExecutionFunctionConfig",
            components: [
              { name: "plugin", type: "address", internalType: "address" },
              {
                name: "userOpValidationFunction",
                type: "bytes21",
                internalType: "FunctionReference",
              },
              {
                name: "runtimeValidationFunction",
                type: "bytes21",
                internalType: "FunctionReference",
              },
            ],
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getExecutionHooks",
        inputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
        outputs: [
          {
            name: "execHooks",
            type: "tuple[]",
            internalType: "struct IAccountLoupe.ExecutionHooks[]",
            components: [
              {
                name: "preExecHook",
                type: "bytes21",
                internalType: "FunctionReference",
              },
              {
                name: "postExecHook",
                type: "bytes21",
                internalType: "FunctionReference",
              },
            ],
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getInstalledPlugins",
        inputs: [],
        outputs: [
          {
            name: "pluginAddresses",
            type: "address[]",
            internalType: "address[]",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getNonce",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getPreValidationHooks",
        inputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
        outputs: [
          {
            name: "preUserOpValidationHooks",
            type: "bytes21[]",
            internalType: "FunctionReference[]",
          },
          {
            name: "preRuntimeValidationHooks",
            type: "bytes21[]",
            internalType: "FunctionReference[]",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "initialize",
        inputs: [
          { name: "plugins", type: "address[]", internalType: "address[]" },
          { name: "pluginInitData", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "installPlugin",
        inputs: [
          { name: "plugin", type: "address", internalType: "address" },
          {
            name: "manifestHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "pluginInstallData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "dependencies",
            type: "bytes21[]",
            internalType: "FunctionReference[]",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "onERC1155BatchReceived",
        inputs: [
          { name: "operator", type: "address", internalType: "address" },
          { name: "from", type: "address", internalType: "address" },
          { name: "ids", type: "uint256[]", internalType: "uint256[]" },
          { name: "values", type: "uint256[]", internalType: "uint256[]" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "onERC1155Received",
        inputs: [
          { name: "operator", type: "address", internalType: "address" },
          { name: "from", type: "address", internalType: "address" },
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "value", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "onERC721Received",
        inputs: [
          { name: "operator", type: "address", internalType: "address" },
          { name: "from", type: "address", internalType: "address" },
          { name: "tokenId", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "proxiableUUID",
        inputs: [],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "supportsInterface",
        inputs: [
          { name: "interfaceId", type: "bytes4", internalType: "bytes4" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "tokensReceived",
        inputs: [
          { name: "operator", type: "address", internalType: "address" },
          { name: "from", type: "address", internalType: "address" },
          { name: "to", type: "address", internalType: "address" },
          { name: "amount", type: "uint256", internalType: "uint256" },
          { name: "userData", type: "bytes", internalType: "bytes" },
          { name: "operatorData", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "uninstallPlugin",
        inputs: [
          { name: "plugin", type: "address", internalType: "address" },
          { name: "config", type: "bytes", internalType: "bytes" },
          {
            name: "pluginUninstallData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "upgradeToAndCall",
        inputs: [
          {
            name: "newImplementation",
            type: "address",
            internalType: "address",
          },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "validateUserOp",
        inputs: [
          {
            name: "userOp",
            type: "tuple",
            internalType: "struct UserOperation",
            components: [
              { name: "sender", type: "address", internalType: "address" },
              { name: "nonce", type: "uint256", internalType: "uint256" },
              { name: "initCode", type: "bytes", internalType: "bytes" },
              { name: "callData", type: "bytes", internalType: "bytes" },
              {
                name: "callGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "verificationGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "preVerificationGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxPriorityFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterAndData",
                type: "bytes",
                internalType: "bytes",
              },
              { name: "signature", type: "bytes", internalType: "bytes" },
            ],
          },
          { name: "userOpHash", type: "bytes32", internalType: "bytes32" },
          {
            name: "missingAccountFunds",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [
          {
            name: "validationData",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        stateMutability: "nonpayable",
      },
      {
        type: "event",
        name: "ModularAccountInitialized",
        inputs: [
          {
            name: "entryPoint",
            type: "address",
            indexed: true,
            internalType: "contract IEntryPoint",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "PluginInstalled",
        inputs: [
          {
            name: "plugin",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "manifestHash",
            type: "bytes32",
            indexed: false,
            internalType: "bytes32",
          },
          {
            name: "dependencies",
            type: "bytes21[]",
            indexed: false,
            internalType: "FunctionReference[]",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "PluginUninstalled",
        inputs: [
          {
            name: "plugin",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "onUninstallSucceeded",
            type: "bool",
            indexed: true,
            internalType: "bool",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Upgraded",
        inputs: [
          {
            name: "implementation",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      { type: "error", name: "AlreadyInitialized", inputs: [] },
      { type: "error", name: "AlreadyInitializing", inputs: [] },
      { type: "error", name: "AlwaysDenyRule", inputs: [] },
      { type: "error", name: "ArrayLengthMismatch", inputs: [] },
      {
        type: "error",
        name: "DuplicateHookLimitExceeded",
        inputs: [
          { name: "selector", type: "bytes4", internalType: "bytes4" },
          {
            name: "hook",
            type: "bytes21",
            internalType: "FunctionReference",
          },
        ],
      },
      {
        type: "error",
        name: "DuplicatePreRuntimeValidationHookLimitExceeded",
        inputs: [
          { name: "selector", type: "bytes4", internalType: "bytes4" },
          {
            name: "hook",
            type: "bytes21",
            internalType: "FunctionReference",
          },
        ],
      },
      {
        type: "error",
        name: "DuplicatePreUserOpValidationHookLimitExceeded",
        inputs: [
          { name: "selector", type: "bytes4", internalType: "bytes4" },
          {
            name: "hook",
            type: "bytes21",
            internalType: "FunctionReference",
          },
        ],
      },
      {
        type: "error",
        name: "Erc4337FunctionNotAllowed",
        inputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
      },
      {
        type: "error",
        name: "ExecFromPluginExternalNotPermitted",
        inputs: [
          { name: "plugin", type: "address", internalType: "address" },
          { name: "target", type: "address", internalType: "address" },
          { name: "value", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
      },
      {
        type: "error",
        name: "ExecFromPluginNotPermitted",
        inputs: [
          { name: "plugin", type: "address", internalType: "address" },
          { name: "selector", type: "bytes4", internalType: "bytes4" },
        ],
      },
      {
        type: "error",
        name: "ExecutionFunctionAlreadySet",
        inputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
      },
      {
        type: "error",
        name: "IPluginFunctionNotAllowed",
        inputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
      },
      { type: "error", name: "InterfaceNotAllowed", inputs: [] },
      { type: "error", name: "InvalidDependenciesProvided", inputs: [] },
      { type: "error", name: "InvalidPluginManifest", inputs: [] },
      {
        type: "error",
        name: "MissingPluginDependency",
        inputs: [
          { name: "dependency", type: "address", internalType: "address" },
        ],
      },
      {
        type: "error",
        name: "NativeFunctionNotAllowed",
        inputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
      },
      {
        type: "error",
        name: "NativeTokenSpendingNotPermitted",
        inputs: [{ name: "plugin", type: "address", internalType: "address" }],
      },
      { type: "error", name: "NullFunctionReference", inputs: [] },
      {
        type: "error",
        name: "PluginAlreadyInstalled",
        inputs: [{ name: "plugin", type: "address", internalType: "address" }],
      },
      {
        type: "error",
        name: "PluginCallDenied",
        inputs: [{ name: "plugin", type: "address", internalType: "address" }],
      },
      {
        type: "error",
        name: "PluginDependencyViolation",
        inputs: [{ name: "plugin", type: "address", internalType: "address" }],
      },
      {
        type: "error",
        name: "PluginInstallCallbackFailed",
        inputs: [
          { name: "plugin", type: "address", internalType: "address" },
          { name: "revertReason", type: "bytes", internalType: "bytes" },
        ],
      },
      {
        type: "error",
        name: "PluginInterfaceNotSupported",
        inputs: [{ name: "plugin", type: "address", internalType: "address" }],
      },
      {
        type: "error",
        name: "PluginNotInstalled",
        inputs: [{ name: "plugin", type: "address", internalType: "address" }],
      },
      {
        type: "error",
        name: "PluginUninstallCallbackFailed",
        inputs: [
          { name: "plugin", type: "address", internalType: "address" },
          { name: "revertReason", type: "bytes", internalType: "bytes" },
        ],
      },
      {
        type: "error",
        name: "PostExecHookReverted",
        inputs: [
          { name: "plugin", type: "address", internalType: "address" },
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "revertReason", type: "bytes", internalType: "bytes" },
        ],
      },
      {
        type: "error",
        name: "PreExecHookReverted",
        inputs: [
          { name: "plugin", type: "address", internalType: "address" },
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "revertReason", type: "bytes", internalType: "bytes" },
        ],
      },
      {
        type: "error",
        name: "PreRuntimeValidationHookFailed",
        inputs: [
          { name: "plugin", type: "address", internalType: "address" },
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "revertReason", type: "bytes", internalType: "bytes" },
        ],
      },
      {
        type: "error",
        name: "RuntimeValidationFunctionAlreadySet",
        inputs: [
          { name: "selector", type: "bytes4", internalType: "bytes4" },
          {
            name: "validationFunction",
            type: "bytes21",
            internalType: "FunctionReference",
          },
        ],
      },
      {
        type: "error",
        name: "RuntimeValidationFunctionMissing",
        inputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
      },
      {
        type: "error",
        name: "RuntimeValidationFunctionReverted",
        inputs: [
          { name: "plugin", type: "address", internalType: "address" },
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "revertReason", type: "bytes", internalType: "bytes" },
        ],
      },
      { type: "error", name: "UnauthorizedCallContext", inputs: [] },
      {
        type: "error",
        name: "UnexpectedAggregator",
        inputs: [
          { name: "plugin", type: "address", internalType: "address" },
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "aggregator", type: "address", internalType: "address" },
        ],
      },
      {
        type: "error",
        name: "UnrecognizedFunction",
        inputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
      },
      { type: "error", name: "UpgradeFailed", inputs: [] },
      { type: "error", name: "UserOpNotFromEntryPoint", inputs: [] },
      {
        type: "error",
        name: "UserOpValidationFunctionAlreadySet",
        inputs: [
          { name: "selector", type: "bytes4", internalType: "bytes4" },
          {
            name: "validationFunction",
            type: "bytes21",
            internalType: "FunctionReference",
          },
        ],
      },
      {
        type: "error",
        name: "UserOpValidationFunctionMissing",
        inputs: [{ name: "selector", type: "bytes4", internalType: "bytes4" }],
      },
    ],
    bytecode:
      "0x60806040526004361015610026575b36156100245761001c61232d565b602081519101f35b005b60003560e01c806223de291461017557806301ffc9a714610170578063150b7a021461016b57806334fcd5be1461016657806338997b11146101615780633a0cac561461015c5780633a871cdd146101575780634f1ef2861461015257806352d1902d1461014d578063642f9dd4146101485780638d1121841461014357806394ed11e71461013e578063b0d691fe14610139578063b61d27f614610134578063bc197c811461012f578063c1a221f31461012a578063c5f0e8d114610125578063ceaf130914610120578063d087d2881461011b578063e69e24a8146101165763f23a6e610361000e576116ef565b61156b565b61149e565b61143e565b611325565b611199565b6110f5565b6110bf565b61107b565b610ed5565b610da4565b610b86565b610acc565b61099b565b610873565b6107dd565b610576565b61044a565b6102d6565b6102a5565b6101cb565b6001600160a01b0381160361018b57565b600080fd5b359061019b8261017a565b565b9181601f8401121561018b5782359167ffffffffffffffff831161018b576020838186019501011161018b57565b3461018b5760c036600319011261018b576101e760043561017a565b6101f260243561017a565b6101fd60443561017a565b67ffffffffffffffff60843581811161018b5761021e90369060040161019d565b505060a43590811161018b5761023890369060040161019d565b505061002461028d6102776001600160e01b0319600035166001600160e01b031916600052600080516020615e60833981519152602052604060002090565b6040519061028482611826565b60008252612424565b906126ba565b6001600160e01b031981160361018b57565b3461018b57602036600319011261018b5760206102cc6004356102c781610293565b6118a0565b6040519015158152f35b3461018b57608036600319011261018b576102f260043561017a565b6102fd60243561017a565b60643567ffffffffffffffff811161018b5761031d90369060040161019d565b505061035c61028d6102776001600160e01b0319600035166001600160e01b031916600052600080516020615e60833981519152602052604060002090565b6020604051630a85bd0160e11b8152f35b9181601f8401121561018b5782359167ffffffffffffffff831161018b576020808501948460051b01011161018b57565b60005b8381106103b15750506000910152565b81810151838201526020016103a1565b906020916103da8151809281855285808601910161039e565b601f01601f1916010190565b6020808201906020835283518092526040830192602060408460051b8301019501936000915b84831061041c5750505050505090565b909192939495848061043a600193603f198682030187528a516103c1565b980193019301919493929061040c565b60208060031936011261018b5760043567ffffffffffffffff811161018b5761047790369060040161036d565b91610480612580565b93909161048c8261198d565b9360005b8381106104b5576104b1866104a589886126ba565b604051918291826103e6565b0390f35b806105066104c660019387866119ed565b356104d08161017a565b856104dc8489886119ed565b01356105006104f96104ef868b8a6119ed565b6040810190611a1e565b3691611a51565b91612604565b6105108289611a88565b5261051b8188611a88565b5001610490565b606060031982011261018b5760043561053a8161017a565b91602435916044359067ffffffffffffffff821161018b5761055e9160040161019d565b9091565b9060206105739281815201906103c1565b90565b61057f36610522565b9192831515806107c9575b80610785575b61075457306001600160a01b0382161461069e576105fc816105e4336001600160a01b03166000527fade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0305602052604060002090565b906001600160a01b0316600052602052604060002090565b805460ff8116156107205760081c60ff16908115610717575b81156106da575b505b1561069e576338997b1160e01b600052600080516020615e608339815191526020526104b193610692929161068c916105006106827f366b46b479d417a249e7f56f296f035e13c924e69b7ed63bca6e286fe8e383b161067c61188d565b90612424565b9590973691611a51565b926126ba565b60405191829182610562565b916106d6916040519485947f808e3b3c0000000000000000000000000000000000000000000000000000000086523360048701611abd565b0390fd5b610711915061070a9060016106ef8787611aec565b9101906001600160e01b031916600052602052604060002090565b5460ff1690565b3861061c565b84159150610615565b505061074f61070a336001600160a01b0316600052600080516020615e80833981519152602052604060002090565b61061e565b6040517f2e36404e000000000000000000000000000000000000000000000000000000008152336004820152602490fd5b506107c46107c06107b6336001600160a01b0316600052600080516020615e80833981519152602052604060002090565b5460081c60ff1690565b1590565b610590565b5034841161058a565b600091031261018b57565b3461018b57600036600319011261018b576107f66127d9565b805160005b81811061085157826040518091602080830160208452825180915260206040850193019160005b82811061083157505050500390f35b83516001600160a01b031685528695509381019392810192600101610822565b8061085e60019285611a88565b5160601c61086c8286611a88565b52016107fb565b3461018b5760031960603682011261018b5760043567ffffffffffffffff811161018b576101608160040192823603011261018b57604435906001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d2789163303610971576104b1926108f96108f3606461093f940183611a1e565b9061293c565b906001610927836001600160e01b031916600052600080516020615e60833981519152602052604060002090565b01549060ff8260a81c16926024359260581b9061297b565b9080610957575b506040519081529081906020820190565b600080808093338219f15061096a611b18565b5038610946565b60046040517fea800da5000000000000000000000000000000000000000000000000000000008152fd5b604036600319011261018b576004356109b38161017a565b60243567ffffffffffffffff811161018b576109d390369060040161019d565b9091307f0000000000000000000000000046000000000151008789797b54fdb500e2a61e14610abe576001600160a01b0390610a0d612580565b929091166352d1902d6001527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc9384602060016004601d865afa5103610ab0578082600096817fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8980a255610a8b575b84610a8885856126ba565b80f35b908185926040519788378638925af415610aa6578380610a7d565b50503d90823e3d90fd5b6355299b496001526004601dfd5b639f03a0266000526004601cfd5b3461018b57600036600319011261018b57307f0000000000000000000000000046000000000151008789797b54fdb500e2a61e03610abe5760206040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b60208082019080835283518092528060408094019401926000905b838210610b5857505050505090565b845180516001600160581b031990811688529084015116868401529485019493820193600190910190610b49565b3461018b5760208060031936011261018b57610bce600435610ba781610293565b6001600160e01b031916600052600080516020615e60833981519152602052604060002090565b6005810190610bdc826128a2565b91610be9600783016128a2565b938351855180936000905b838210610d64575050610c0690612b53565b94600094600601855b838110610c8357505050506000945b828610610c3657838552604051806104b18782610b2e565b90919260018091610c77610c5b610c4d8a87611a88565b516001600160581b03191690565b86610c66848b611a88565b5101906001600160581b0319169052565b01950194929190610c1e565b610cba610cb5610c9b610c4d84879d999a9b9d611a88565b84906001600160581b031916600052602052604060002090565b6128a2565b8051908115610d3c57906000915b818310610ce1575050506001905b019795949397610c0f565b90919a600181610d328d8f610c6685968f92610c4d610d2c918f610d0c8f610c4d90610d2693611a88565b610d16868a611a88565b51906001600160581b0319169052565b8b611a88565b93611a88565b019b019190610cc8565b50509760018091610d5d610d53610c4d8d88611a88565b610d16838d611a88565b0198610cd6565b9091600190610d95610d8f610d82610c4d878d9e9a9b9c999e611a88565b6001600160581b03191690565b84614800565b01920190979295949397610bf4565b3461018b57602036600319011261018b576104b1600435610dc481610293565b610e4d60405191610dd48361179c565b60008352610e3f6002610e37602086019360008552610ba7604088019560008752610dfe83612bb6565b15610e8b573089525b610e3f6001610e37856001600160e01b031916600052600080516020615e60833981519152602052604060002090565b015460581b90565b6001600160581b0319169052565b60405191829182919091604060608201936001600160a01b038151168352816020820151916001600160581b03198093166020860152015116910152565b610ed06001600160a01b03610ec1856001600160e01b031916600052600080516020615e60833981519152602052604060002090565b54166001600160a01b03168a52565b610e07565b602036600319011261018b5760043567ffffffffffffffff811161018b57610f0190369060040161019d565b610f0b818361293c565b91610f776107c061070a3360601b6bffffffffffffffffffffffff191660a087901c6bffffffff000000000000000016175b67ffffffffffffffff19166000527fade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0304602052604060002090565b61103a5790610f8591612f46565b610fb0826001600160e01b031916600052600080516020615e60833981519152602052604060002090565b610fcb82610fc583546001600160a01b031690565b92612424565b9290936001600160a01b03831615611016575090610feb610ff192612f8d565b90612fc7565b91610ffa612fd9565b921561100e576104b19291610692916126ba565b825160208401fd5b60405163fcfc5aad60e01b81526001600160e01b0319919091166004820152602490fd5b6040517fe85f2f3e0000000000000000000000000000000000000000000000000000000081523360048201526001600160e01b031984166024820152604490fd5b3461018b57600036600319011261018b5760206040516001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d2789168152f35b6104b161068c6110e16110d136610522565b9491610500610682949294612580565b6040519182916020835260208301906103c1565b3461018b5760a036600319011261018b5761111160043561017a565b61111c60243561017a565b67ffffffffffffffff60443581811161018b5761113d90369060040161036d565b505060643581811161018b5761115790369060040161036d565b505060843590811161018b5761117190369060040161019d565b50506104b161117e611b48565b6040516001600160e01b031990911681529081906020820190565b3461018b57606036600319011261018b576004356111b68161017a565b67ffffffffffffffff9060243582811161018b576111d890369060040161019d565b9260443590811161018b576111f190369060040161019d565b906111fa612580565b949093611205611b95565b6001600160a01b038316815296600091816112c0575b50501561124f575b509061123f918560606100249701805115611244575b5061310f565b6126ba565b600019905238611239565b9060006001600160a01b039392600460405180968193630c77631360e41b8352165afa9586156112bb576100249661123f94600091611298575b50602082015295509091611223565b6112b591503d806000833e6112ad8183611842565b810190611f7c565b38611289565b6120f2565b6112cc91810190611c45565b8051805180611301575b5050806112f36112eb60206040940151151590565b15158a840152565b01516060880152388061121b565b611315929350602080918301019101611f7c565b60208801526001906040386112d6565b3461018b57608036600319011261018b576004356113428161017a565b67ffffffffffffffff60443581811161018b5761136390369060040161019d565b909160643590811161018b5761137d90369060040161036d565b909361139461138a612580565b9590943691611a51565b9161139e81611975565b956113ac6040519788611842565b818752602091602088019060051b82019136831161018b57905b8282106113e057610024888861123f8c8a6024358b613923565b81356001600160581b03198116810361018b5781529083019083016113c6565b90815180825260208080930193019160005b828110611420575050505090565b83516001600160581b03191685529381019392810192600101611412565b3461018b57602036600319011261018b57611490611461600435610ba781610293565b6104b161147c6004611475600385016128a2565b93016128a2565b604051938493604085526040850190611400565b908382036020850152611400565b3461018b57600080600319360112611568576040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201528160248201526020816044816001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d2789165afa9081156112bb57829161152d575b604051828152602090f35b90506020813d602011611560575b8161154860209383611842565b8101031261155c576104b191505138611522565b5080fd5b3d915061153b565b80fd5b3461018b57604036600319011261018b5767ffffffffffffffff60043581811161018b5761159d90369060040161036d565b9160243590811161018b576115b690369060040161019d565b907fade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0300549360ff8560081c1615809581966116e1575b81156116c1575b5015611697577fade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0300805460ff191660011790556116329385611664576121a6565b61163857005b7fade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0300805461ff0019169055005b7fade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0300805461ff0019166101001790556121a6565b60046040517f0dc149f0000000000000000000000000000000000000000000000000000000008152fd5b303b159150816116d3575b50386115f2565b6001915060ff1614386116cc565b600160ff82161091506115eb565b3461018b5760a036600319011261018b5761170b60043561017a565b61171660243561017a565b60843567ffffffffffffffff811161018b5761173690369060040161019d565b505061177561028d6102776001600160e01b0319600035166001600160e01b031916600052600080516020615e60833981519152602052604060002090565b602060405163f23a6e6160e01b8152f35b634e487b7160e01b600052604160045260246000fd5b6060810190811067ffffffffffffffff8211176117b857604052565b611786565b610180810190811067ffffffffffffffff8211176117b857604052565b6040810190811067ffffffffffffffff8211176117b857604052565b67ffffffffffffffff81116117b857604052565b60a0810190811067ffffffffffffffff8211176117b857604052565b6020810190811067ffffffffffffffff8211176117b857604052565b90601f8019910116810190811067ffffffffffffffff8211176117b857604052565b6040519061019b826117bd565b67ffffffffffffffff81116117b857601f01601f191660200190565b6040519061189a82611826565b60008252565b6001600160e01b03199081811691821461196e576301ffc9a760e01b821491821561195d575b821561194d575b8215611923575b5081156118df575090565b61191d91506001600160e01b0319166000527fade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0306602052604060002090565b54151590565b7f4e2312e000000000000000000000000000000000000000000000000000000000149150386118d4565b6223de2960e01b811492506118cd565b630a85bd0160e11b811492506118c6565b5050600090565b67ffffffffffffffff81116117b85760051b60200190565b9061199782611975565b6119a46040519182611842565b82815280926119b5601f1991611975565b019060005b8281106119c657505050565b8060606020809385010152016119ba565b634e487b7160e01b600052603260045260246000fd5b9190811015611a0f5760051b81013590605e198136030182121561018b570190565b6119d7565b356105738161017a565b903590601e198136030182121561018b570180359067ffffffffffffffff821161018b5760200191813603831361018b57565b929192611a5d82611871565b91611a6b6040519384611842565b82948184528183011161018b578281602093846000960137010152565b8051821015611a0f5760209160051b010190565b908060209392818452848401376000828201840152601f01601f1916010190565b909261057395936080936001600160a01b03809216845216602083015260408201528160608201520191611a9c565b6001600160e01b03199035818116939260048110611b0957505050565b60040360031b82901b16169150565b3d15611b43573d90611b2982611871565b91611b376040519384611842565b82523d6000602084013e565b606090565b61019b90611b866102776001600160e01b0319600035166001600160e01b031916600052600080516020615e60833981519152602052604060002090565b63bc197c8160e01b93916126ba565b604051906080820182811067ffffffffffffffff8211176117b85760405260008281815260405190611bc6826117bd565b60609182815282602082015282604082015282808201528360808201528360a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015260208201528260408201520152565b9080601f8301121561018b5781602061057393359101611a51565b8015150361018b57565b9060208282031261018b57813567ffffffffffffffff9283821161018b570160608183031261018b5760405192611c7b8461179c565b813590811161018b57604092611c92918301611c20565b83526020810135611ca281611c3b565b60208401520135604082015290565b9080601f8301121561018b57815190602091611ccc81611975565b93611cda6040519586611842565b81855260208086019260051b82010192831161018b57602001905b828210611d03575050505090565b8380918351611d1181610293565b815201910190611cf5565b519061019b82611c3b565b81601f8201121561018b57805191602091611d4184611975565b93604092611d526040519687611842565b818652848087019260051b8401019381851161018b57858401925b858410611d7e575050505050505090565b835167ffffffffffffffff9081811161018b57860191606080601f19858803011261018b57845190611daf8261179c565b8a850151611dbc8161017a565b825285850151611dcb81611c3b565b8b83015284015192831161018b57611dea868b80969581960101611cb1565b85820152815201930192611d6d565b919082606091031261018b57604051611e118161179c565b80928051600581101561018b578252602081015160ff8116810361018b576020830152604090810151910152565b9080601f8301121561018b578151916020611e5984611975565b93604093611e6a6040519687611842565b818652828087019260071b8501019381851161018b578301915b848310611e945750505050505090565b60808383031261018b57836080918751611ead816117da565b8551611eb881610293565b8152611ec685848801611df9565b83820152815201920191611e84565b81601f8201121561018b578051906020611eee83611975565b93604090611eff6040519687611842565b848652828601918360e08097028601019482861161018b578401925b858410611f2c575050505050505090565b868484031261018b578487918351611f438161179c565b8651611f4e81610293565b8152611f5c86848901611df9565b83820152611f6d8660808901611df9565b85820152815201930192611f1b565b60208183031261018b57805167ffffffffffffffff9182821161018b57016101808184031261018b57611fad611864565b92815183811161018b5781611fc3918401611cb1565b8452602082015183811161018b5781611fdd918401611cb1565b6020850152604082015183811161018b5781611ffa918401611cb1565b6040850152606082015183811161018b5781612017918401611cb1565b606085015261202860808301611d1c565b608085015261203960a08301611d1c565b60a085015260c082015183811161018b5781612056918401611d27565b60c085015260e082015183811161018b5781612073918401611e3f565b60e08501526101008083015184811161018b5782612092918501611e3f565b908501526101208083015184811161018b57826120b0918501611e3f565b908501526101408083015184811161018b57826120ce918501611e3f565b90850152610160928383015190811161018b576120eb9201611ed5565b9082015290565b6040513d6000823e3d90fd5b81601f8201121561018b5780359160209161211884611975565b936121266040519586611842565b808552838086019160051b8301019280841161018b57848301915b8483106121515750505050505090565b823567ffffffffffffffff811161018b57869161217384848094890101611c20565b815201920191612141565b60405161218a81611826565b60008152906000368137565b9190811015611a0f5760051b0190565b9190939281019060408183031261018b5767ffffffffffffffff91813583811161018b5782019281601f8501121561018b578335936020906121e786611975565b956121f56040519788611842565b808752828088019160051b8301019185831161018b5783809101915b83831061231d575050505083013590811161018b5761223092016120fe565b9080518514801590612312575b6122e85761224961217e565b9160005b8681106122ac57505050505090506001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d2789167f9f08b8dca66d3393166c297eebdbe382963a15cce40f3a2f4bf32378553fe65a600080a2565b806122e2856122c66122c16001958c8b612196565b611a14565b6122d08488611a88565b516122db8588611a88565b5191613923565b0161224d565b60046040517fa24a13a6000000000000000000000000000000000000000000000000000000008152fd5b50815185141561223d565b8235815291810191849101612211565b6001600160a01b03337f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27898216146123dd576123666140d1565b905b600080356001600160e01b031916808252600080516020615e608339815191526020526040909120906123a282546001600160a01b031690565b928316156110165750610feb916123bc846123c493612424565b939094612f8d565b916123cd612fd9565b921561100e5790610573916126ba565b6123e636612eef565b90612368565b634e487b7160e01b600052601160045260246000fd5b906001820180921161241057565b6123ec565b60001981019190821161241057565b9160609183549260ff808560a81c169460a01c1661256e575b80519484156125655760ff60015b16860180961161241057939194906124628261198d565b95869161246e8461198d565b9687946005820183519060005b8281106124c75750505061019b96612495575b505061435b565b6124ad6124a760076124bf94016128a2565b91612415565b906124b88287611a88565b5284611a88565b50388061248e565b9092959894975060019193966001600160581b03196124e6838b611a88565b51168260048061250a84899061ffff191660005260205261fffc6040600020541690565b1614612524575b50505001918996939794918b969361247b565b61254b610cb56125519360068d01906001600160581b031916600052602052604060002090565b92611a88565b5261255c818d611a88565b508b3882612511565b60ff600061244b565b5061257b600585016128a2565b61243d565b60405161258c81611826565b600081526001600160a01b037f0000000000000000000000005ff137d4b0fdcd49dca30c7cf57e578a026d27891633036125f1575b600080356001600160e01b0319168152600080516020615e608339815191526020526040902061055e9190612424565b5061055e6125fd6140d1565b90506125c1565b92919061261084614456565b61263e5790600092938392602083519301915af19061262d611b18565b911561263557565b50602081519101fd5b6024846001600160a01b03604051917ffa06f06e000000000000000000000000000000000000000000000000000000008352166004820152fd5b60409060ff610573949316815281602082015201906103c1565b60ff61057394936001600160a01b0360609416835216602082015281604082015201906103c1565b908151805b6126c857505050565b600019016126d68184611a88565b518051906000905b8282106126ee57505050806126bf565b93612714612705610c4d84889a969a999599611a88565b9060ff8260601c9260581c1690565b9490976001600160a01b0389169661272c8385611a88565b5198883b1561018b57604098895190631128186d60e01b825281808b60049e8f83019161275892612678565b03815a6000948591f190816127c0575b506127ab578a8a6106d68b8b61277c611b18565b91519485947f665b77fc0000000000000000000000000000000000000000000000000000000086528501612692565b929650939750939750600191955001906126de565b806127cd6127d3926117f6565b806107d2565b38612768565b60016000818152600080516020615ea08339815191526020527f94cfd67f685607e46dacbf75e6a3a5cc7e0a77a9dde0d0269384d8135edf6083546040519392805b612832575b50506001810160051b83016040528252565b90918183161580612899575b156128935761fffe198316908201600581901b8601829052928291906002161561288a5761288390600052600080516020615ea0833981519152602052604060002090565b549161281b565b5060009161281b565b91612820565b5082151561283e565b906000600192600182528060205260408220549084604051955b6128d4575b5050506001810160051b83016040528252565b9091928184161580612933575b1561292d5761fffe198416908201600581901b8701829052938291906002161561292457612919908490600052602052604060002090565b54915b9291926128bc565b5060009161291c565b926128c1565b508315156128e1565b919060048110612950576105739192611aec565b61295c60249184611aec565b6001600160e01b03196040519163fcfc5aad60e01b8352166004820152fd5b60009390926001600160581b0319831615612b18579061299a91614573565b916000946129f2575b50816129ce6129d9926127056129de9560200163af87348360e01b6001600160e01b03825116179052565b60ff16602483015291565b614697565b91156129ee579061057391614755565b5090565b612a2b919450612a256003916001600160e01b031916600052600080516020615e60833981519152602052604060002090565b016128a2565b928351936000905b858210612a4057506129a3565b9093612a67612a52610c4d8785611a88565b600160591b906001600160581b031916111590565b612b0757612a7b612705610c4d8785611a88565b60ff81166024870152909190612a918387614697565b926001600160a01b03841660018111612abb57505050600191612ab3916146b8565b940190612a33565b6040517f6655309e0000000000000000000000000000000000000000000000000000000081526001600160a01b03928316600482015260ff939093166024840152166044820152606490fd5b6004604051636756835b60e11b8152fd5b6040517f6596ccb10000000000000000000000000000000000000000000000000000000081526001600160e01b031985166004820152602490fd5b90612b5d82611975565b604090612b6d6040519182611842565b8381528093612b7e601f1991611975565b019160009060005b848110612b94575050505050565b6020908251612ba2816117da565b848152828581830152828701015201612b86565b6001600160e01b0319167f3a871cdd000000000000000000000000000000000000000000000000000000008114908115612ec5575b8115612e9b575b8115612e8a575b8115612e60575b8115612e4f575b8115612e25575b8115612e14575b8115612dea575b8115612dc0575b8115612d96575b8115612d85575b8115612d5b575b8115612d31575b8115612d07575b8115612cdd575b8115612cb3575b8115612ca3575b8115612c92575b8115612c81575b8115612c73575090565b63bc197c8160e01b91501490565b63f23a6e6160e01b81149150612c69565b630a85bd0160e11b81149150612c62565b6223de2960e01b81149150612c5b565b7f3a0cac560000000000000000000000000000000000000000000000000000000081149150612c54565b7fceaf13090000000000000000000000000000000000000000000000000000000081149150612c4d565b7f642f9dd40000000000000000000000000000000000000000000000000000000081149150612c46565b7f8d1121840000000000000000000000000000000000000000000000000000000081149150612c3f565b7fe69e24a80000000000000000000000000000000000000000000000000000000081149150612c38565b6338997b1160e01b81149150612c31565b7f94ed11e70000000000000000000000000000000000000000000000000000000081149150612c2a565b7f34fcd5be0000000000000000000000000000000000000000000000000000000081149150612c23565b7fb61d27f60000000000000000000000000000000000000000000000000000000081149150612c1c565b63278f794360e11b81149150612c15565b7f52d1902d0000000000000000000000000000000000000000000000000000000081149150612c0e565b6301ffc9a760e01b81149150612c07565b7fc1a221f30000000000000000000000000000000000000000000000000000000081149150612c00565b63c5f0e8d160e01b81149150612bf9565b7fd087d2880000000000000000000000000000000000000000000000000000000081149150612bf2565b7fb0d691fe0000000000000000000000000000000000000000000000000000000081149150612beb565b61057360c460405180936000602083015260006024830152336044830152346064830152608060848301528060a4830152806000848401376000838284010152601f801991011681010360a4810184520182611842565b9061057390612f7f60405193849260006020850152600060248501523360448501523460648501526080608485015260a4840191611a9c565b03601f198101835282611842565b8051612fc15750612f9d36611871565b612faa6040519182611842565b368152366000602083013760006020368301015290565b60a40190565b600091829182602083519301915af190565b604051903d8252601f19603f3d840101166040523d6000602084013e565b906040516130048161180a565b8092805460ff81161515835260ff60209160081c16151560208401526001906001830154604085015260028301906040519283602084549182815201936000526020600020926000905b828210613078575050505050918161306c6003936080950382611842565b60608501520154910152565b845460581b6001600160581b031916865294850194938301939083019061304e565b600090818155600182600183015560028201805490848155816130c1575b50505060030155565b845260208420908101905b818110156130b85784815582016130cc565b916020610573938181520191611a9c565b6040906001600160a01b03610573949316815281602082015201906103c1565b916131446107c061313f61312a86516001600160a01b031690565b60601b6bffffffffffffffffffffffff191690565b61484f565b6138285761318a61318561315f85516001600160a01b031690565b6001600160a01b0316600052600080516020615e80833981519152602052604060002090565b612ff7565b9160209260208501908151946131a96107c06040978885015190614c08565b6138185760808201516137c45760608092015180519060005b828110613772575050506131e86131e361315f89516001600160a01b031690565b61309a565b6131f061217e565b610160808551015151908260005b8b868c8a878510613717575050505050505050610140808551015151908560005b848c8583106136f25750505050505061012090818551015151918960005b8785821061369d575050505050506101008084510151519060005b82811061367b5750505060e08084510151519060005b82811061362c57505050825161328a6107c06080830151151590565b61350a575b5050606082510151519060005b8281106134a25750505083815101515160005b818110613465575050805151519060005b8281106133f7575050506001916132f06132e46132e487516001600160a01b031690565b6001600160a01b031690565b906060860151823b1561018b5761332093600080948851809781968295638a91b0e360e01b8452600484016130de565b0393f190816133e4575b506133d55750613338611b18565b906133486107c082850151151590565b6133905750506133656132e46000925b516001600160a01b031690565b901515907feb7551bad8fd10038dee62a958c2b6f45624499dc800ff8936bb0a4904bdd2fe600080a3565b6106d66133a484516001600160a01b031690565b91519283927f6b601a7c000000000000000000000000000000000000000000000000000000008452600484016130ef565b9161336591506132e490613358565b806127cd6133f1926117f6565b3861332a565b8061345361341a61340c600194865151611a88565b516001600160e01b03191690565b6001600160e01b0319166000527fade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0306602052604060002090565b61345d8154612415565b9055016132c0565b8061349c61347f610ba761340c6001958b89510151611a88565b73ffffffffffffffffffffffffffffffffffffffff198154169055565b016132af565b6001906135046134fa610f3d6134bf8c516001600160a01b031690565b6134d061340c86898c510151611a88565b6bffffffff00000000000000009060a01c16906bffffffffffffffffffffffff199060601b161790565b805460ff19169055565b0161329c565b60c080910151519060005b89898785841061352957505050505061328f565b61358a6135526132e461354387896135ac96510151611a88565b5195516001600160a01b031690565b6001600160a01b03166000527fade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0305602052604060002090565b83516001600160a01b03166001600160a01b0316600052602052604060002090565b805460ff191681559180870151156135d3575050805461ff00191690556001905b01613515565b01805151906000906001809401915b8381106135f65750505050506001906135cd565b806136266134fa61360c61340c89958751611a88565b86906001600160e01b031916600052602052604060002090565b016135e2565b806136756001613656610ba76136478396888d510151611a88565b51516001600160e01b03191690565b0174ffffffffffffffffffffffffffffffffffffffffff198154169055565b0161326e565b806136976002613656610ba7613647600196888d510151611a88565b01613258565b6001926136e4866136b585886136ea96510151611a88565b51926136de8b6136cd86516001600160e01b03191690565b95015191516001600160a01b031690565b90614d34565b906150ab565b018a9061323d565b61370961370f926136b58588600198510151611a88565b9061504d565b01869061321f565b60019561376a9461375e613732888b61376496510151611a88565b51946136cd8461374a88516001600160e01b03191690565b9888015185516001600160a01b03166136de565b90614e2b565b91614f13565b0183906131fe565b8060036137b161378a612705610c4d60019688611a88565b506001600160a01b0316600052600080516020615e80833981519152602052604060002090565b016137bc8154612415565b9055016131c2565b6106d6866137d989516001600160a01b031690565b90517fad3b36340000000000000000000000000000000000000000000000000000000081526001600160a01b0390911660048201529081906024820190565b60048651635f1b910f60e11b8152fd5b6106d661383c84516001600160a01b031690565b6040517f038e01780000000000000000000000000000000000000000000000000000000081526001600160a01b0390911660048201529081906024820190565b81519167ffffffffffffffff83116117b8576801000000000000000083116117b85781548383558084106138e1575b5060208091019160005260206000209060005b8481106138cc575050505050565b835160581c83820155928101926001016138be565b60008360005284602060002092830192015b8281106139015750506138ab565b8181556001016138f3565b604090610573939281528160208201520190611400565b939091926139456107c06bffffffffffffffffffffffff198760601b16615109565b614097576139556107c086614456565b61405d576001600160a01b03851690604093845195630c77631360e41b875260009060049782818a81895afa9081156112bb578391614043575b5061399d6107c08583614c08565b61403457845160209081830190815151810361402557855b818110613f3357505050888201805151908c865b838110613f12575050505060608201805151908c865b838110613ef05750505050608082015115613e1f57613a2e613a218c6001600160a01b0316600052600080516020615e80833981519152602052604060002090565b805460ff19166001179055565b60e08201805151908c865b838110613de757505050506101008201805151908c865b838110613da75750505050613a6361217e565b906101208301805151908d875b838110613d8457505050506101408301805151908d875b838110613d445750505050610160830191825151928d875b8d868210613cf557505092505050869150825151855b818110613c3657505091613b2960a0926002613b23868a6001613afb613b309a6001600160a01b0316600052600080516020615e80833981519152602052604060002090565b01556001600160a01b0316600052600080516020615e80833981519152602052604060002090565b0161387c565b0151151590565b613bf5575b843b1561155c5790613b59918751809381926306d61fe760e41b83528b8301610562565b038183885af19081613be2575b50613ba85786866106d687613b79611b18565b90519384937fe838e76100000000000000000000000000000000000000000000000000000000855284016130ef565b919450919450613bdd7f32d6790d50f8334621a74f0f62e534ef3f4f98133225305074e99e7ce4d8917f93519283928361390c565b0390a2565b806127cd613bef926117f6565b38613b66565b613c31613c228a6001600160a01b0316600052600080516020615e80833981519152602052604060002090565b805461ff001916610100179055565b613b35565b91509150613c4861340c828551611a88565b6001600160e01b03198082169063f23b1ed760e01b8214918215613ceb575b5050613cc35790613cad6001926001600160e01b0319166000527fade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0306602052604060002090565b613cb78154612402565b90550186918c91613ab5565b8b8b517fd02b530d000000000000000000000000000000000000000000000000000000008152fd5b1490503880613c67565b85613d3c91613d3687600196613d0c878a51611a88565b5193613d2e8383613d2588516001600160e01b03191690565b98880151614d34565b940151614e2b565b9161575d565b018e90613a9f565b613d7c600192613d7688613d59858851611a88565b519289613d6e85516001600160e01b03191690565b940151614d34565b906156a5565b018e90613a87565b613d9f600192613d9988613d59858851611a88565b906155dc565b018e90613a70565b613ddf600192613dd98c613dbc858851611a88565b519289613dd185516001600160e01b03191690565b940151614ea0565b90615518565b018d90613a50565b613e17600192613e118c613dfc858851611a88565b519289613d2e85516001600160e01b03191690565b90615454565b018d90613a39565b60c0820180515190855b828110613e3857505050613a2e565b613e43818351611a88565b518c613e8461358a8d6001600160a01b03166000527fade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0305602052604060002090565b805460ff19166001178155918087015115613eb2575050805461ff0019166101001790556001905b01613e29565b018051519089906001809401915b838110613ed4575050505050600190613eac565b80613eea613a2161360c61340c89958751611a88565b01613ec0565b613f0a613a21610f3d6001946134d061340c868951611a88565b018d906139df565b613f2b600192613f2661340c848751611a88565b6152c8565b018d906139c9565b613f43612705610c4d838c611a88565b506001613f70826001600160a01b0316600052600080516020615e80833981519152602052604060002090565b015415613fe657613f916107c0613f8b61340c858851611a88565b836144e0565b613fd757906003613fc46001936001600160a01b0316600052600080516020615e80833981519152602052604060002090565b01613fcf8154612402565b9055016139b5565b8d8d51631794e5f160e01b8152fd5b8c517f9ca2818b0000000000000000000000000000000000000000000000000000000081526001600160a01b03909116818f0190815281906020010390fd5b8b8b51631794e5f160e01b8152fd5b888851635f1b910f60e11b8152fd5b61405791503d8085833e6112ad8183611842565b3861398f565b6040517fb7038f390000000000000000000000000000000000000000000000000000000081526001600160a01b0386166004820152602490fd5b6040517f9d615d050000000000000000000000000000000000000000000000000000000081526001600160a01b0386166004820152602490fd5b6001600160e01b0319600035169061410f6002610e37846001600160e01b031916600052600080516020615e60833981519152602052604060002090565b9161414b6002614140836001600160e01b031916600052600080516020615e60833981519152602052604060002090565b015460a81c60ff1690565b9261415536612eef565b9361422e575b6001600160581b0319811690600160591b82116141f0575015806141be575b6141815750565b6040517fe429f7160000000000000000000000000000000000000000000000000000000081526001600160e01b0319919091166004820152602490fd5b5063c5f0e8d160e01b811415806141df575b8061417a57503033141561417a565b5063278f794360e11b8114156141d0565b61019b9250614228915061421d906127058660200163bfd151c160e01b6001600160e01b03825116179052565b60ff16602486015290565b83615951565b61424d8460200163031fb36160e21b6001600160e01b03825116179052565b600461427f6004612a25856001600160e01b031916600052600080516020615e60833981519152602052604060002090565b9081519160005b838110614296575050505061415b565b6142a3610c4d8284611a88565b600160591b6001600160581b0319821611156142ec57906142e66142e06142d56001949060ff8260601c9260581c1690565b60ff1660248d015290565b8a6158e3565b01614286565b83604051636756835b60e11b8152fd5b60208183031261018b5780519067ffffffffffffffff821161018b570181601f8201121561018b57805161432f81611871565b9261433d6040519485611842565b8184526020828401011161018b57610573916020808501910161039e565b91929092825192831561444f5784511561443e575b61438f8560200163236b075960e11b6001600160e01b03825116179052565b60005b8481106143a157505050505050565b6143ae610c4d8284611a88565b90600160591b6001600160581b031983161115612b07576143f16143eb6143e06001949060ff8260601c9260581c1690565b60ff1660248b015290565b886159bf565b6143fb8185611a88565b5151614408575b01614392565b614423614413612fd9565b80516020809183010191016142fc565b61442d8287611a88565b526144388186611a88565b50614402565b935061444936612eef565b93614370565b5050505050565b61445f81615a2d565b90816144ce575b8161446f575090565b60209150600090604051838101906301ffc9a760e01b825263f23b1ed760e01b6024820152602481526144a18161179c565b5191617530fa6000513d826144c2575b50816144bb575090565b9050151590565b602011159150386144b1565b90506144d981615a56565b1590614466565b6144e981615a2d565b918261452f575b826144fa57505090565b60209250906000916040516001600160e01b0319858201926301ffc9a760e01b8452166024820152602481526144a18161179c565b915061453a81615a56565b15916144f0565b9035601e198236030181121561018b57016020813591019167ffffffffffffffff821161018b57813603831361018b57565b6105739061468392604051938492632238633960e21b602085015260006024850152606060448501526145b9608485016145ac83610190565b6001600160a01b03169052565b602081013560a48501526145e66145d36040830183614541565b61016060c48801526101e4870191611a9c565b6146736146676146106145fc6060860186614541565b6083198a8703810160e48c01529591611a9c565b608085013561010489015260a085013561012489015260c085013561014489015260e0850135610164890152610100850135610184890152614656610120860186614541565b90858a8403016101a48b0152611a9c565b92610140810190614541565b91868403016101c4870152611a9c565b90606483015203601f198101835282611842565b80516020926000928401908390600019f1601f3d1116156120f25760005190565b9065ffffffffffff60a01b65ffffffffffff808460a01c16801561474e575b818460a01c16918215614746575b828116908216111561473a575060a01b16915b8160d01c8160d01c10600014614729576001600160d01b03198216915b6001600160a01b0380911691161791171790565b6001600160d01b0319811691614715565b905060a01b16916146f8565b9150816146e5565b50806146d7565b9065ffffffffffff60a01b65ffffffffffff808460a01c1680156147f9575b818460a01c169182156147f1575b82811690821611156147e5575060a01b16915b8160d01c8160d01c106000146147d4576001600160d01b03198216915b6001600160a01b039182166001036147cd5750501760011790565b1691171790565b6001600160d01b03198116916147b2565b905060a01b1691614795565b915081614782565b5080614774565b61481c82829061ffff1916600052602052604060002054151590565b1561196e5760ff61484661ffff936001939061ffff191660005260205261fffc6040600020541690565b60081c16011690565b61ffff19169061487682600052600080516020615ea0833981519152602052604060002090565b5482158015614960575b614959576001600060015b1561492f575b506000906148b681600052600080516020615ea0833981519152602052604060002090565b549061fffe1980831691908783146148d05750509161488b565b61490b9294969750946149299561fffc6002839694961693169116171791600052600080516020615ea0833981519152602052604060002090565b55600052600080516020615ea0833981519152602052604060002090565b55600190565b6001811615908161494f575b50156149475738614891565b506000925050565b905015153861493b565b5060009150565b508015614880565b919061ffff191691614984838290600052602052604060002090565b549083158015614a3c575b614947576001600060015b15614a11575b506000906149b8818490600052602052604060002090565b549061fffe1980831691908883146149d25750509161499a565b614a01929594979850956149299661fffc60028396949616931691161717918390600052602052604060002090565b5590600052602052604060002090565b60018116159081614a32575b5015614a2957386149a0565b50600093505050565b9050151538614a1d565b50811561498f565b90815180825260208080930193019160005b828110614a64575050505090565b83516001600160e01b03191685529381019392810192600101614a56565b908082519081815260208091019281808460051b8301019501936000915b848310614ab05750505050505090565b9091929394958480614af6600193601f198682030187528a51906060906001600160a01b0383511681528483015115158582015281604080940151938201520190614a44565b9801930193019194939290614aa0565b60051115614b1057565b634e487b7160e01b600052602160045260246000fd5b80516005811015614b10576040918291845260ff60208201511660208501520151910152565b90815180825260208080930193019160005b828110614b6c575050505090565b90919293826080600192614b958389516001600160e01b03198151168452015184830190614b26565b01950193929101614b5e565b90815180825260208080930193019160005b828110614bc1575050505090565b909192938260e0600192614bfc604089516001600160e01b03198151168452614bf08682015187860190614b26565b01516080830190614b26565b01950193929101614bb3565b604051614d2d81612f7f6020820194602086528051614c35610180918260408701526101c0860190614a44565b90614d1a614c83614c6f614c5b602087015195603f1996878b83030160608c0152614a44565b6040870151868a83030160808b0152614a44565b6060860151858983030160a08a0152614a44565b6080850151151560c088015260a0850151151560e0880152614cb660c08601519161010092868a830301848b0152614a82565b92614d07614cf0614cd960e089015196610120978c898b82850301910152614b4c565b938801519361014094888c830301868d0152614b4c565b948701519461016095878b830301878c0152614b4c565b9186015190858984030190890152614b4c565b92015190848303016101a0850152614ba1565b5190201490565b919060018351614d4381614b06565b614d4c81614b06565b14614dee575060028251614d5f81614b06565b614d6881614b06565b14614dc2575060038151614d7b81614b06565b614d8481614b06565b14614db15760049051614d9681614b06565b614d9f81614b06565b14614da957600090565b600160591b90565b6004604051635f1b910f60e11b8152fd5b90604001519080518210614de1576004604051635f1b910f60e11b8152fd5b61057391610c4d91611a88565b9050614e01602061057393015160ff1690565b6bff00000000000000000000009060581b16906bffffffffffffffffffffffff199060601b161790565b919060018351614e3a81614b06565b614e4381614b06565b14614dee575060028251614e5681614b06565b614e5f81614b06565b14614dc2575060038151614e7281614b06565b614e7b81614b06565b14614db15760049051614e8d81614b06565b614e9681614b06565b14614db157600090565b919060018351614eaf81614b06565b614eb881614b06565b14614dee575060028251614ecb81614b06565b614ed481614b06565b14614dc2575060038151614ee781614b06565b614ef081614b06565b14614f025760049051614e8d81614b06565b506b01000000000000000000000090565b614f3e906001600160e01b031916600052600080516020615e60833981519152602052604060002090565b91600091829160058501916001600160581b031980821692831561502257614f668486615a87565b50614f7085615af0565b615019575b1680614faa575b505050505b614f9a575b614f8d5750565b805460ff60a81b19169055565b815460ff60a01b19168255614f86565b614ffc91614ff791614fdd60068a0191614fd88484906001600160581b031916600052602052604060002090565b615a87565b50906001600160581b031916600052602052604060002090565b615af0565b615008575b8080614f7c565b61501191615db6565b503880615001565b60019550614f75565b61503f945060078801935061503992501682615a87565b50615af0565b15614f815760019150614f81565b61507b615094916001600160e01b031916600052600080516020615e60833981519152602052604060002090565b9161503960048401916001600160581b03191682615a87565b61509b5750565b60020160ff60a81b198154169055565b6150d96150f2916001600160e01b031916600052600080516020615e60833981519152602052604060002090565b9161503960038401916001600160581b03191682615a87565b6150f95750565b60010160ff60a81b198154169055565b61ffff19168015801561520a575b615204576001600052600080516020615ea08339815191526020527f94cfd67f685607e46dacbf75e6a3a5cc7e0a77a9dde0d0269384d8135edf608354801580156151fa575b156151b457506001600052600080516020615ea08339815191526020526151af906151a990807f94cfd67f685607e46dacbf75e6a3a5cc7e0a77a9dde0d0269384d8135edf608361490b565b60019055565b600190565b6001600052600080516020615ea08339815191526020529061492990600281177f94cfd67f685607e46dacbf75e6a3a5cc7e0a77a9dde0d0269384d8135edf608361490b565b506001811661515d565b50600090565b5080600052600080516020615ea08339815191526020526040600020541515615117565b9061ffff191690811580156152b2575b61196e57600160005280602052604060002054801580156152a8575b1561527d575081816151af93614a016151a9946001600052602052604060002090565b9160028117615296836001600052602052604060002090565b55600052602052604060002055600190565b506001811661525a565b508160005280602052604060002054151561523e565b91906152f5836001600160e01b031916600052600080516020615e60833981519152602052604060002090565b6001600160a01b0361530e82546001600160a01b031690565b166154195761531c84612bb6565b6153de5761532984615b13565b6153a35761533684615c19565b6153685761019b929350906001600160a01b031673ffffffffffffffffffffffffffffffffffffffff19825416179055565b6040517f3cecfc370000000000000000000000000000000000000000000000000000000081526001600160e01b031985166004820152602490fd5b6040517fd69e21110000000000000000000000000000000000000000000000000000000081526001600160e01b031985166004820152602490fd5b6040517fe171c7790000000000000000000000000000000000000000000000000000000081526001600160e01b031985166004820152602490fd5b6040517fec9cbcb30000000000000000000000000000000000000000000000000000000081526001600160e01b031985166004820152602490fd5b61545d82615d0b565b600161548a826001600160e01b031916600052600080516020615e60833981519152602052604060002090565b01906001600160581b0319825460581b166154c857509061019b919060581c74ffffffffffffffffffffffffffffffffffffffffff19825416179055565b6040517fb2a80ddc0000000000000000000000000000000000000000000000000000000081526001600160e01b03199190911660048201526001600160581b031992909216602483015250604490fd5b61552182615d0b565b600261554e826001600160e01b031916600052600080516020615e60833981519152602052604060002090565b01906001600160581b0319825460581b1661558c57509061019b919060581c74ffffffffffffffffffffffffffffffffffffffffff19825416179055565b6040517fe70980510000000000000000000000000000000000000000000000000000000081526001600160e01b03199190911660048201526001600160581b031992909216602483015250604490fd5b906155e681615d0b565b615611826001600160e01b031916600052600080516020615e60833981519152602052604060002090565b916156296001600160581b0319831660038501615d46565b15615656575050600101805460ff8160a81c1615615645575050565b60ff60a81b1916600160a81b179055565b6040517f30d603400000000000000000000000000000000000000000000000000000000081526001600160e01b03199190911660048201526001600160581b0319919091166024820152604490fd5b906156af81615d0b565b6156da826001600160e01b031916600052600080516020615e60833981519152602052604060002090565b916156f26001600160581b0319831660048501615d46565b1561570e575050600201805460ff8160a81c1615615645575050565b6040517fecd75c600000000000000000000000000000000000000000000000000000000081526001600160e01b03199190911660048201526001600160581b0319919091166024820152604490fd5b91615789836001600160e01b031916600052600080516020615e60833981519152602052604060002090565b926001600160581b0319928084168015801593929160058801916158bb576157b46107c08284615d46565b61588957868616908161580e575b50505050505b156157f3575050805460ff60a01b191674010000000000000000000000000000000000000000179055565b166157fb5750565b805460ff60a81b1916600160a81b179055565b61584593615822615840926107c095615e29565b5060068a01906001600160581b031916600052602052604060002090565b615d46565b61585257808080806157c2565b6040516320fdf93b60e21b81526001600160e01b03199190911660048201526001600160581b031992909216602483015250604490fd5b6040516320fdf93b60e21b81526001600160e01b0319851660048201526001600160581b031984166024820152604490fd5b5050506158c783615d0b565b6158d96107c085851660078801615d46565b61585257506157c8565b60008082516020840182865af1156158f9575050565b6024604051916084601f19601f3d011601937f40b788e3000000000000000000000000000000000000000000000000000000008452600484015201516024820152606060448201523d60648201523d6000608483013efd5b60008082516020840182865af115615967575050565b6024604051916084601f19601f3d011601937f10b2d36b000000000000000000000000000000000000000000000000000000008452600484015201516024820152606060448201523d60648201523d6000608483013efd5b60008082516020840182865af1156159d5575050565b6024604051916084601f19601f3d011601937f0cb6620d000000000000000000000000000000000000000000000000000000008452600484015201516024820152606060448201523d60648201523d6000608483013efd5b6000602091604051838101906301ffc9a760e01b8083526024820152602481526144a18161179c565b6000602091604051838101906301ffc9a760e01b82526001600160e01b03196024820152602481526144a18161179c565b615aa382829061ffff1916600052602052604060002054151590565b1561196e57615ac682829061ffff191660005260205261fffc6040600020541690565b9161ffff61010081851610615ae4576105739360ff19011691615df4565b50906105739250614968565b60016000526020526040600020548015908115615b0b575090565b600191501690565b6001600160e01b0319166306d61fe760e41b8114908115615c08575b8115615bf7575b8115615be6575b8115615bd5575b8115615bc4575b8115615bb3575b8115615ba2575b8115615b91575b8115615b6a575090565b7f118a53890000000000000000000000000000000000000000000000000000000091501490565b630c77631360e41b81149150615b60565b631128186d60e01b81149150615b59565b63236b075960e11b81149150615b52565b63bfd151c160e01b81149150615b4b565b63031fb36160e21b81149150615b44565b63af87348360e01b81149150615b3d565b632238633960e21b81149150615b36565b638a91b0e360e01b81149150615b2f565b6001600160e01b0319167fe3563a4f000000000000000000000000000000000000000000000000000000008114908115615ce1575b8115615cb7575b8115615c8d575b8115615c66575090565b7fa9a234090000000000000000000000000000000000000000000000000000000091501490565b7ff465c77e0000000000000000000000000000000000000000000000000000000081149150615c5c565b7f275e2d790000000000000000000000000000000000000000000000000000000081149150615c55565b7f64c530cd0000000000000000000000000000000000000000000000000000000081149150615c4e565b6001600160581b03191615615d1c57565b60046040517f6c911ea0000000000000000000000000000000000000000000000000000000008152fd5b615d6282829061ffff1916600052602052604060002054151590565b15615dac57615d8582829061ffff191660005260205261fffc6040600020541690565b9161ffff61feff81851611615da35761010061057394011691615df4565b50505050600090565b906105739161522e565b615dd482829061ffff191660005260205261fffc6040600020541690565b916004831615615dec5761fffb610573931691615df4565b505050600190565b9061ffff19166000526020526040600020908154908115615e215761fffc169061fffc1916179055600190565b505050600090565b615e4782829061ffff191660005260205261fffc6040600020541690565b91600480841614615dec576004610573931791615df456feade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0303ade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0302ade46bbfcf6f898a43d541e42556d456ca0bf9b326df8debc0f29d3f811a0301a26469706673582212200aacf7ee650c886f548e0d3d803ae6b2eafe360f255751c7ff35dc191eb7fdd364736f6c63430008160033",
  },
  MultiOwnerPlugin: {
    address: "0xcE0000007B008F50d762D155002600004cD6c647",
    abi: [
      {
        type: "function",
        name: "eip712Domain",
        inputs: [],
        outputs: [
          { name: "fields", type: "bytes1", internalType: "bytes1" },
          { name: "name", type: "string", internalType: "string" },
          { name: "version", type: "string", internalType: "string" },
          { name: "chainId", type: "uint256", internalType: "uint256" },
          {
            name: "verifyingContract",
            type: "address",
            internalType: "address",
          },
          { name: "salt", type: "bytes32", internalType: "bytes32" },
          {
            name: "extensions",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "encodeMessageData",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "message", type: "bytes", internalType: "bytes" },
        ],
        outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getMessageHash",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "message", type: "bytes", internalType: "bytes" },
        ],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "isOwnerOf",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "ownerToCheck", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "isValidSignature",
        inputs: [
          { name: "digest", type: "bytes32", internalType: "bytes32" },
          { name: "signature", type: "bytes", internalType: "bytes" },
        ],
        outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "onInstall",
        inputs: [{ name: "data", type: "bytes", internalType: "bytes" }],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "onUninstall",
        inputs: [{ name: "", type: "bytes", internalType: "bytes" }],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "ownersOf",
        inputs: [{ name: "account", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "pluginManifest",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "tuple",
            internalType: "struct PluginManifest",
            components: [
              {
                name: "interfaceIds",
                type: "bytes4[]",
                internalType: "bytes4[]",
              },
              {
                name: "dependencyInterfaceIds",
                type: "bytes4[]",
                internalType: "bytes4[]",
              },
              {
                name: "executionFunctions",
                type: "bytes4[]",
                internalType: "bytes4[]",
              },
              {
                name: "permittedExecutionSelectors",
                type: "bytes4[]",
                internalType: "bytes4[]",
              },
              {
                name: "permitAnyExternalAddress",
                type: "bool",
                internalType: "bool",
              },
              {
                name: "canSpendNativeToken",
                type: "bool",
                internalType: "bool",
              },
              {
                name: "permittedExternalCalls",
                type: "tuple[]",
                internalType: "struct ManifestExternalCallPermission[]",
                components: [
                  {
                    name: "externalAddress",
                    type: "address",
                    internalType: "address",
                  },
                  {
                    name: "permitAnySelector",
                    type: "bool",
                    internalType: "bool",
                  },
                  {
                    name: "selectors",
                    type: "bytes4[]",
                    internalType: "bytes4[]",
                  },
                ],
              },
              {
                name: "userOpValidationFunctions",
                type: "tuple[]",
                internalType: "struct ManifestAssociatedFunction[]",
                components: [
                  {
                    name: "executionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "associatedFunction",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                ],
              },
              {
                name: "runtimeValidationFunctions",
                type: "tuple[]",
                internalType: "struct ManifestAssociatedFunction[]",
                components: [
                  {
                    name: "executionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "associatedFunction",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                ],
              },
              {
                name: "preUserOpValidationHooks",
                type: "tuple[]",
                internalType: "struct ManifestAssociatedFunction[]",
                components: [
                  {
                    name: "executionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "associatedFunction",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                ],
              },
              {
                name: "preRuntimeValidationHooks",
                type: "tuple[]",
                internalType: "struct ManifestAssociatedFunction[]",
                components: [
                  {
                    name: "executionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "associatedFunction",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                ],
              },
              {
                name: "executionHooks",
                type: "tuple[]",
                internalType: "struct ManifestExecutionHook[]",
                components: [
                  {
                    name: "executionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "preExecHook",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                  {
                    name: "postExecHook",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        stateMutability: "pure",
      },
      {
        type: "function",
        name: "pluginMetadata",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "tuple",
            internalType: "struct PluginMetadata",
            components: [
              { name: "name", type: "string", internalType: "string" },
              { name: "version", type: "string", internalType: "string" },
              { name: "author", type: "string", internalType: "string" },
              {
                name: "permissionDescriptors",
                type: "tuple[]",
                internalType: "struct SelectorPermission[]",
                components: [
                  {
                    name: "functionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "permissionDescription",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
        ],
        stateMutability: "pure",
      },
      {
        type: "function",
        name: "postExecutionHook",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "preExecHookData", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "preExecutionHook",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "sender", type: "address", internalType: "address" },
          { name: "value", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "preRuntimeValidationHook",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "sender", type: "address", internalType: "address" },
          { name: "value", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "preUserOpValidationHook",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          {
            name: "userOp",
            type: "tuple",
            internalType: "struct UserOperation",
            components: [
              { name: "sender", type: "address", internalType: "address" },
              { name: "nonce", type: "uint256", internalType: "uint256" },
              { name: "initCode", type: "bytes", internalType: "bytes" },
              { name: "callData", type: "bytes", internalType: "bytes" },
              {
                name: "callGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "verificationGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "preVerificationGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxPriorityFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterAndData",
                type: "bytes",
                internalType: "bytes",
              },
              { name: "signature", type: "bytes", internalType: "bytes" },
            ],
          },
          { name: "userOpHash", type: "bytes32", internalType: "bytes32" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "runtimeValidationFunction",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "sender", type: "address", internalType: "address" },
          { name: "", type: "uint256", internalType: "uint256" },
          { name: "", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "supportsInterface",
        inputs: [
          { name: "interfaceId", type: "bytes4", internalType: "bytes4" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "updateOwners",
        inputs: [
          {
            name: "ownersToAdd",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "ownersToRemove",
            type: "address[]",
            internalType: "address[]",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "userOpValidationFunction",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          {
            name: "userOp",
            type: "tuple",
            internalType: "struct UserOperation",
            components: [
              { name: "sender", type: "address", internalType: "address" },
              { name: "nonce", type: "uint256", internalType: "uint256" },
              { name: "initCode", type: "bytes", internalType: "bytes" },
              { name: "callData", type: "bytes", internalType: "bytes" },
              {
                name: "callGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "verificationGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "preVerificationGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxPriorityFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterAndData",
                type: "bytes",
                internalType: "bytes",
              },
              { name: "signature", type: "bytes", internalType: "bytes" },
            ],
          },
          { name: "userOpHash", type: "bytes32", internalType: "bytes32" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "event",
        name: "OwnerUpdated",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "addedOwners",
            type: "address[]",
            indexed: false,
            internalType: "address[]",
          },
          {
            name: "removedOwners",
            type: "address[]",
            indexed: false,
            internalType: "address[]",
          },
        ],
        anonymous: false,
      },
      { type: "error", name: "AlreadyInitialized", inputs: [] },
      { type: "error", name: "EmptyOwnersNotAllowed", inputs: [] },
      { type: "error", name: "InvalidAction", inputs: [] },
      {
        type: "error",
        name: "InvalidOwner",
        inputs: [{ name: "owner", type: "address", internalType: "address" }],
      },
      { type: "error", name: "NotAuthorized", inputs: [] },
      {
        type: "error",
        name: "NotContractCaller",
        inputs: [{ name: "caller", type: "address", internalType: "address" }],
      },
      {
        type: "error",
        name: "NotImplemented",
        inputs: [
          { name: "selector", type: "bytes4", internalType: "bytes4" },
          { name: "functionId", type: "uint8", internalType: "uint8" },
        ],
      },
      { type: "error", name: "NotInitialized", inputs: [] },
      {
        type: "error",
        name: "OwnerDoesNotExist",
        inputs: [{ name: "owner", type: "address", internalType: "address" }],
      },
    ],
    bytecode:
      "0x60808060405260048036101561001457600080fd5b60003560e01c91826301ffc9a714611111575081630c7ecd8414610b915781630c976227146110205781631128186d14610fe3578163118a538914610ded5781631626ba7e14610d9e578163197ea35b14610d725781633956224714610ba857816346d60eb214610b915781636d61fe7014610a0c57816384b0196e146109355781638616d61d1461090e57816388e18ce4146108f95781638a91b0e314610805578163af873483146107e4578163bfd151c1146107c8578163c77631301461012f575063f582bceb146100e757600080fd5b3461012a57604036600319011261012a576101006111c9565b602435906001600160a01b038216820361012a5760209161012091611b87565b6040519015158152f35b600080fd5b3461012a57600036600319011261012a57610148611b1a565b50610151611b1a565b633956224760e01b61017f6040516101688161134a565b6003815260603660208301378060408501526116bf565b526342580cb760e11b61019560408301516116e2565b52630b135d3f60e11b6101ab60408301516116f2565b526040516101b881611312565b6001815260016020820152600060408201526040516101d681611366565b6006815260005b60c0811061078857509061032a9160e08401526102246040516101ff816112e0565b633956224760e01b815282602082015260e08501519061021e826116bf565b526116bf565b50610259604051610234816112e0565b635b0e93fb60e11b815282602082015260e085015190610253826116e2565b526116e2565b5061028e604051610269816112e0565b631a7e6adf60e11b815282602082015260e085015190610288826116f2565b526116f2565b506102c360405161029e816112e0565b63c5f0e8d160e01b815282602082015260e0850151906102bd82611702565b52611702565b506102f86040516102d3816112e0565b63c1a221f360e01b815282602082015260e0850151906102f282611712565b52611712565b5060405190610306826112e0565b63278f794360e11b8252602082015260e08301519061032482611722565b52611722565b5060405161033781611312565b6001815260006020820152600060408201526040519061035682611312565b600382526000602083015260006040830152604051938461012081011067ffffffffffffffff61012087011117610773575061012084016040526008845260005b610100811061073357506104cc9083946101006105359501526103df6040516103bf816112e0565b633956224760e01b81528260208201526101008701519061021e826116bf565b5061040f6040516103ef816112e0565b635b0e93fb60e11b815282602082015261010087015190610253826116e2565b5061043f60405161041f816112e0565b631a7e6adf60e11b815282602082015261010087015190610288826116f2565b5061046f60405161044f816112e0565b63c5f0e8d160e01b8152826020820152610100870151906102bd82611702565b5061049f60405161047f816112e0565b63c1a221f360e01b8152826020820152610100870151906102f282611712565b50604051906104ad826112e0565b63278f794360e11b825260208201526101008501519061032482611722565b506105026040516104dc816112e0565b630b135d3f60e11b8152826020820152610100850151906104fc82611732565b52611732565b5060405190610510826112e0565b6342580cb760e11b825260208201526101008301519061052f82611742565b52611742565b506040518091602082526105a261058c610576610560845161018060208801526101a0870190611511565b6020850151868203601f19016040880152611511565b6040840151858203601f19016060870152611511565b6060830151848203601f19016080860152611511565b6080820151151560a084015260a0820151151560c084015260c082015190601f198482030160e0850152815180825260208201916020808360051b8301019401926000915b8383106106da5787808861062761060f8a60e0840151601f1986830301610100870152611594565b610100830151848203601f1901610120860152611594565b6106616106486101208401519261014093601f198783030185880152611594565b918301519161016092601f198683030184870152611594565b91015190601f19838203016101808401526020808351928381520192019060005b818110610690575050500390f35b91935091602060e06001926106cc604088516001600160e01b031981511684526106c0868201518786019061156f565b0151608083019061156f565b019401910191849392610682565b91939596509193602080610720600193601f19868203018752606060408b516001600160a01b038151168452858101511515868501520151918160408201520190611511565b97019301930190928796959492936105e7565b602090604051610742816112e0565b6000815260405161075281611312565b60008152600084820152600060408201528382015282828801015201610397565b604190634e487b7160e01b6000525260246000fd5b602090604051610797816112e0565b600081526040516107a781611312565b600081526000848201526000604082015283820152828285010152016101dd565b3461012a576107e26107d93661120d565b50505090611a8b565b005b3461012a5760206107fd6107f7366114cc565b916119ab565b604051908152f35b3461012a57602036600319011261012a5780359067ffffffffffffffff821161012a57610834913691016111df565b505061084761084233611bd4565b611c97565b7f8102106be6867f3566db7ac13c2a7afdcb3cba87576742016de13819f97e04e661088a604051926108788461132e565b60008452604051918291339583611953565b0390a26108b7336001600160a01b0360405191168152637c9c64bb60e11b60208201526000604082015290565b60608101906001805b156108df575b825260808120805460009182905561fffe1916906108c0565b6001811615806108f0575b6108c657005b508015156108ea565b3461012a57610907366114cc565b50506115e9565b3461012a57602061092761092136611415565b90611832565b818151910120604051908152f35b3461012a57600036600319011261012a5761098e61095161164d565b610959611686565b604051906109668261132e565b6000825261099c602091604051958695601f60f81b875260e0602088015260e08701906112a0565b9085820360408701526112a0565b4660608501523360808501527fce0000007b008f50d762d155002600004cd6c64700000000000000000000000060a085015283810360c08501526020808451928381520193019160005b8281106109f557505050500390f35b8351855286955093810193928101926001016109e6565b3461012a57602036600319011261012a5767ffffffffffffffff813581811161012a57610a3c90369084016111df565b919091333b15610b61576080610a72336001600160a01b0360405191168152637c9c64bb60e11b60208201526000604082015290565b6001606082015220548015908115610b56575b5015610b2d5782019060208383031261012a57823590811161012a57610aab9201611455565b90815115610b055750610abe8133611e01565b7f8102106be6867f3566db7ac13c2a7afdcb3cba87576742016de13819f97e04e6610b00604051610aee8161132e565b60008152604051918291339583611953565b0390a2005b6040517f9aa6ffc3000000000000000000000000000000000000000000000000000000008152fd5b836040517f0dc149f0000000000000000000000000000000000000000000000000000000008152fd5b600191501685610a85565b6040517fa425f81d0000000000000000000000000000000000000000000000000000000081523381860152602490fd5b3461012a57610b9f3661120d565b505050506115e9565b3461012a57604036600319011261012a5767ffffffffffffffff813581811161012a57610bd89036908401611455565b9160249160243590811161012a57610bf39036908301611455565b91604051338152637c9c64bb60e11b60208201526000604082015260019160806060926001606082015220548015908115610d67575b50610d3e5784519160005b838110610ccb57878787610c488333611e01565b6080610c74336001600160a01b0360405191168152637c9c64bb60e11b60208201526000604082015290565b6001606082015220548015908115610cc0575b50610b055750610b007f8102106be6867f3566db7ac13c2a7afdcb3cba87576742016de13819f97e04e691604051918291339583611953565b600191501684610c87565b610cf06bffffffffffffffffffffffff19610ce6838a611753565b51841b1633611f1b565b15610cfc578401610c34565b856001600160a01b03610d1085938a611753565b5116604051917f531e21ce000000000000000000000000000000000000000000000000000000008352820152fd5b836040517f87138d5c000000000000000000000000000000000000000000000000000000008152fd5b600191501687610c29565b3461012a57610d9a610d8661092136611415565b6040519182916020835260208301906112a0565b0390f35b3461012a57604036600319011261012a5760243567ffffffffffffffff811161012a57602091610dd4610ddb92369083016113f7565b9035611767565b6001600160e01b031960405191168152f35b3461012a57600036600319011261012a57610e06611618565b50610e0f611618565b610e1761164d565b8152610e21611686565b9060209182820190815260405190610e38826112e0565b600782527f416c6368656d7900000000000000000000000000000000000000000000000000848301526040830191825260405191610e75836112e0565b601083527f4d6f64696679204f776e657273686970000000000000000000000000000000008584015260405190610eab826112e0565b6001936001835260005b878110610fb6575090610ef3610f39926060880194855260405190610ed9826112e0565b633956224760e01b82528982015284519061021e826116bf565b50610f28610f12604051978989525160808a8a015260a08901906112a0565b945194601f1995868983030160408a01526112a0565b9051848783030160608801526112a0565b9051948285830301608086015285519182815281810182808560051b8401019801946000925b858410610f6c57888a0389f35b909192939495968580610fa38c8686869f030188526040838d516001600160e01b03198151168452015191818582015201906112a0565b9b99019796959190910193019190610f5f565b968093949597604051610fc8816112e0565b60008152606083820152828288010152019694939296610eb5565b3461012a57604036600319011261012a5780359060ff8216820361012a576024359067ffffffffffffffff821161012a57610907913691016111df565b3461012a57602036600319011261012a576001600160a01b036110416111c9565b16604051908152637c9c64bb60e11b602082015260006040820152600090606081016001916001825260808082205491604051938560808601965b6110b3575b610d9a61109f888a60808a6001830160051b01016040528152611c97565b604051918291602083526020830190611263565b90919293968188161580611108575b156111025761fffe198816908201600581901b8701860182905297600216156110f85782528084842054915b949392919461107c565b50806000916110ee565b96611081565b508715156110c2565b903461012a57602036600319011261012a5735906001600160e01b0319821680920361012a57817fdb9b90a3000000000000000000000000000000000000000000000000000000006020931490811561116c575b5015158152f35b7ff23b1ed70000000000000000000000000000000000000000000000000000000081149150811561119f575b5083611165565b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501483611198565b600435906001600160a01b038216820361012a57565b9181601f8401121561012a5782359167ffffffffffffffff831161012a576020838186019501011161012a57565b90608060031983011261012a5760043560ff8116810361012a57916024356001600160a01b038116810361012a5791604435916064359067ffffffffffffffff821161012a5761125f916004016111df565b9091565b90815180825260208080930193019160005b828110611283575050505090565b83516001600160a01b031685529381019392810192600101611275565b919082519283825260005b8481106112cc575050826000602080949584010152601f8019910116010190565b6020818301810151848301820152016112ab565b6040810190811067ffffffffffffffff8211176112fc57604052565b634e487b7160e01b600052604160045260246000fd5b6060810190811067ffffffffffffffff8211176112fc57604052565b6020810190811067ffffffffffffffff8211176112fc57604052565b6080810190811067ffffffffffffffff8211176112fc57604052565b60e0810190811067ffffffffffffffff8211176112fc57604052565b90601f8019910116810190811067ffffffffffffffff8211176112fc57604052565b67ffffffffffffffff81116112fc57601f01601f191660200190565b9291926113cc826113a4565b916113da6040519384611382565b82948184528183011161012a578281602093846000960137010152565b9080601f8301121561012a57816020611412933591016113c0565b90565b90604060031983011261012a576004356001600160a01b038116810361012a57916024359067ffffffffffffffff821161012a57611412916004016113f7565b81601f8201121561012a5780359160209167ffffffffffffffff84116112fc578360051b906040519461148a85840187611382565b8552838086019282010192831161012a578301905b8282106114ad575050505090565b81356001600160a01b038116810361012a57815290830190830161149f565b9060031960608184011261012a5760043560ff8116810361012a57926024359167ffffffffffffffff831161012a57826101609203011261012a576004019060443590565b90815180825260208080930193019160005b828110611531575050505090565b83516001600160e01b03191685529381019392810192600101611523565b6005111561155957565b634e487b7160e01b600052602160045260246000fd5b60408091805161157e8161154f565b845260ff60208201511660208501520151910152565b90815180825260208080930193019160005b8281106115b4575050505090565b909192938260806001926115dd8389516001600160e01b0319815116845201518483019061156f565b019501939291016115a6565b6040516384b9b37960e01b81526001600160e01b031960003516600482015260ff919091166024820152604490fd5b604051906080820182811067ffffffffffffffff8211176112fc57604052606080838181528160208201528160408201520152565b6040519061165a826112e0565b601282527f4d756c7469204f776e657220506c7567696e00000000000000000000000000006020830152565b60405190611693826112e0565b600582527f312e302e300000000000000000000000000000000000000000000000000000006020830152565b8051156116cc5760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156116cc5760400190565b8051600210156116cc5760600190565b8051600310156116cc5760800190565b8051600410156116cc5760a00190565b8051600510156116cc5760c00190565b8051600610156116cc5760e00190565b8051600710156116cc576101000190565b80518210156116cc5760209160051b010190565b6117879060405190602082015260208152611781816112e0565b33611832565b60208151910120906117998183611cca565b6117a28161154f565b1590816117e1575b506117d4576117b99133611cfe565b6117c9576001600160e01b031990565b630b135d3f60e11b90565b5050630b135d3f60e11b90565b6080915061180f336001600160a01b0360405191168152637c9c64bb60e11b60208201526000604082015290565b906bffffffffffffffffffffffff199060601b16606082015220541515386117aa565b81516020809301207f19010000000000000000000000000000000000000000000000000000000000006040918251858101917fbdd7fd9cb347c6a55cbb0e955e03b82b8c237ef32b23d4edf7397fb14d8ca67f83528482015283815261189781611312565b519020926118a361164d565b858151910120906001600160a01b036118ba611686565b87815191012091855192888401947fd87cd6ef79d4e2b95e15ce8abf732db51ec771f1ca2edccf22a46c729ac5647286528785015260608401524660808401521660a08201527fce0000007b008f50d762d155002600004cd6c64700000000000000000000000060c082015260c0815261193381611366565b51902091519384015260228301526042820152604281526114128161134a565b909161196a61141293604084526040840190611263565b916020818403910152611263565b903590601e198136030182121561012a570180359067ffffffffffffffff821161012a5760200191813603831361012a57565b91600160ff8416146119e4576040516384b9b37960e01b81526001600160e01b031960003516600482015260ff84166024820152604490fd5b9091507f19457468657265756d205369676e6564204d6573736167653a0a33320000000060005280601c52603c600020611a37610140840191611a31611a2a8487611978565b36916113c0565b90611cca565b611a408161154f565b159081611a7a575b50611a7257611a2a611a5d91611a6494611978565b9033611cfe565b611a6d57600190565b600090565b505050600090565b611a85915033611b87565b38611a48565b9060ff821615611ac2576040516384b9b37960e01b81526001600160e01b031960003516600482015260ff83166024820152604490fd5b6001600160a01b038116331415915081611b08575b50611ade57565b60046040517fea8e4eb5000000000000000000000000000000000000000000000000000000008152fd5b611b13915033611b87565b1538611ad7565b60405190610180820182811067ffffffffffffffff8211176112fc5760405281610160606091828152826020820152826040820152828082015260006080820152600060a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b90611bb46080926001600160a01b0360405191168152637c9c64bb60e11b60208201526000604082015290565b906bffffffffffffffffffffffff199060601b1660608201522054151590565b906001600160a01b0360405192168252637c9c64bb60e11b602083015260008060408401526000906060840160019460018252608090608081205492604051948860808701995b611c38575b5050505050506001820160051b016080016040528252565b9091929394968188161580611c8e575b15611c885761fffe198816908201600581901b880187018290529760021615611c7f5783528085852054915b959493929195611c1b565b50808291611c74565b96611c20565b50871515611c48565b805160005b818110611ca857505090565b80611cb560019285611753565b5160601c611cc38286611753565b5201611c9c565b906041815114600014611cf45761125f916020820151906060604084015193015160001a90611e8c565b5050600090600290565b610842611d0d91939293611bd4565b9182519260005b848110611d25575050505050600090565b6001600160a01b03611d378284611753565b51168360409160008084519289602094611d8181611d7388820194630b135d3f60e11b9a8b875260248401528b604484015260648301906112a0565b03601f198101835282611382565b51915afa923d15611df9573d611da2611d99826113a4565b92519283611382565b81523d60008383013e5b83611dec575b83611dd1575b505050611dc757600101611d14565b5050505050600190565b90809293508180518101031261012a57015114388080611db8565b9250808351101592611db2565b506060611dac565b9080519160005b838110611e155750505050565b611e3b6bffffffffffffffffffffffff19611e308386611753565b5160601b1683611ff8565b15611e4857600101611e08565b6001600160a01b03611e5c60249285611753565b5116604051907fb20f76e30000000000000000000000000000000000000000000000000000000082526004820152fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311611f0f5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15611f025781516001600160a01b03811615611efc579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b919061ffff1916916001600160a01b0360405191168152637c9c64bb60e11b60208201526000908160408201526060810184815260808083209283549287158015611ff0575b611fe6576001908660015b15611fb9575b508691815283832080549061fffe1990818316918c8314611f9557505092611f6c565b95509798999a50509480945061fffc92506002915016931691161717905555600190565b60018116159081611fdc575b5015611fd15738611f72565b509496505050505050565b9050151538611fc5565b5093955050505050565b508315611f61565b9061ffff191690811561207d576001600160a01b0360405191168152637c9c64bb60e11b60208201526000604082015260608101828152608082209182546120745760016080925220918254928315801561206a575b1561205e57600193505555600190565b90600217905555600190565b506001841661204e565b50505050600090565b505060009056fea26469706673582212205756507a3725e6bcec21a20f624405190a119b347562ed54acd20ab2f5217eb364736f6c63430008160033",
  },
  SessionKeyPlugin: {
    address: "0x000000e30a00f600823700E975f1b1ac387f0017",
    abi: [
      {
        type: "function",
        name: "addSessionKey",
        inputs: [
          { name: "sessionKey", type: "address", internalType: "address" },
          { name: "tag", type: "bytes32", internalType: "bytes32" },
          {
            name: "permissionUpdates",
            type: "bytes[]",
            internalType: "bytes[]",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "executeWithSessionKey",
        inputs: [
          {
            name: "calls",
            type: "tuple[]",
            internalType: "struct Call[]",
            components: [
              { name: "target", type: "address", internalType: "address" },
              { name: "value", type: "uint256", internalType: "uint256" },
              { name: "data", type: "bytes", internalType: "bytes" },
            ],
          },
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "bytes[]", internalType: "bytes[]" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "findPredecessor",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getAccessControlEntry",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
          {
            name: "contractAddress",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [
          { name: "isOnList", type: "bool", internalType: "bool" },
          { name: "checkSelectors", type: "bool", internalType: "bool" },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getAccessControlType",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
        outputs: [
          {
            name: "",
            type: "uint8",
            internalType: "enum ISessionKeyPlugin.ContractAccessControlType",
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getERC20SpendLimitInfo",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
        ],
        outputs: [
          {
            name: "",
            type: "tuple",
            internalType: "struct ISessionKeyPlugin.SpendLimitInfo",
            components: [
              { name: "hasLimit", type: "bool", internalType: "bool" },
              { name: "limit", type: "uint256", internalType: "uint256" },
              {
                name: "limitUsed",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "refreshInterval",
                type: "uint48",
                internalType: "uint48",
              },
              {
                name: "lastUsedTime",
                type: "uint48",
                internalType: "uint48",
              },
            ],
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getGasSpendLimit",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
        outputs: [
          {
            name: "info",
            type: "tuple",
            internalType: "struct ISessionKeyPlugin.SpendLimitInfo",
            components: [
              { name: "hasLimit", type: "bool", internalType: "bool" },
              { name: "limit", type: "uint256", internalType: "uint256" },
              {
                name: "limitUsed",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "refreshInterval",
                type: "uint48",
                internalType: "uint48",
              },
              {
                name: "lastUsedTime",
                type: "uint48",
                internalType: "uint48",
              },
            ],
          },
          { name: "shouldReset", type: "bool", internalType: "bool" },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getKeyTimeRange",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
        outputs: [
          { name: "validAfter", type: "uint48", internalType: "uint48" },
          { name: "validUntil", type: "uint48", internalType: "uint48" },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getNativeTokenSpendLimitInfo",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
        outputs: [
          {
            name: "info",
            type: "tuple",
            internalType: "struct ISessionKeyPlugin.SpendLimitInfo",
            components: [
              { name: "hasLimit", type: "bool", internalType: "bool" },
              { name: "limit", type: "uint256", internalType: "uint256" },
              {
                name: "limitUsed",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "refreshInterval",
                type: "uint48",
                internalType: "uint48",
              },
              {
                name: "lastUsedTime",
                type: "uint48",
                internalType: "uint48",
              },
            ],
          },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getRequiredPaymaster",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "isSelectorOnAccessControlList",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
          {
            name: "contractAddress",
            type: "address",
            internalType: "address",
          },
          { name: "selector", type: "bytes4", internalType: "bytes4" },
        ],
        outputs: [{ name: "isOnList", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "isSessionKeyOf",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "onInstall",
        inputs: [{ name: "data", type: "bytes", internalType: "bytes" }],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "onUninstall",
        inputs: [{ name: "", type: "bytes", internalType: "bytes" }],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "pluginManifest",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "tuple",
            internalType: "struct PluginManifest",
            components: [
              {
                name: "interfaceIds",
                type: "bytes4[]",
                internalType: "bytes4[]",
              },
              {
                name: "dependencyInterfaceIds",
                type: "bytes4[]",
                internalType: "bytes4[]",
              },
              {
                name: "executionFunctions",
                type: "bytes4[]",
                internalType: "bytes4[]",
              },
              {
                name: "permittedExecutionSelectors",
                type: "bytes4[]",
                internalType: "bytes4[]",
              },
              {
                name: "permitAnyExternalAddress",
                type: "bool",
                internalType: "bool",
              },
              {
                name: "canSpendNativeToken",
                type: "bool",
                internalType: "bool",
              },
              {
                name: "permittedExternalCalls",
                type: "tuple[]",
                internalType: "struct ManifestExternalCallPermission[]",
                components: [
                  {
                    name: "externalAddress",
                    type: "address",
                    internalType: "address",
                  },
                  {
                    name: "permitAnySelector",
                    type: "bool",
                    internalType: "bool",
                  },
                  {
                    name: "selectors",
                    type: "bytes4[]",
                    internalType: "bytes4[]",
                  },
                ],
              },
              {
                name: "userOpValidationFunctions",
                type: "tuple[]",
                internalType: "struct ManifestAssociatedFunction[]",
                components: [
                  {
                    name: "executionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "associatedFunction",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                ],
              },
              {
                name: "runtimeValidationFunctions",
                type: "tuple[]",
                internalType: "struct ManifestAssociatedFunction[]",
                components: [
                  {
                    name: "executionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "associatedFunction",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                ],
              },
              {
                name: "preUserOpValidationHooks",
                type: "tuple[]",
                internalType: "struct ManifestAssociatedFunction[]",
                components: [
                  {
                    name: "executionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "associatedFunction",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                ],
              },
              {
                name: "preRuntimeValidationHooks",
                type: "tuple[]",
                internalType: "struct ManifestAssociatedFunction[]",
                components: [
                  {
                    name: "executionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "associatedFunction",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                ],
              },
              {
                name: "executionHooks",
                type: "tuple[]",
                internalType: "struct ManifestExecutionHook[]",
                components: [
                  {
                    name: "executionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "preExecHook",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                  {
                    name: "postExecHook",
                    type: "tuple",
                    internalType: "struct ManifestFunction",
                    components: [
                      {
                        name: "functionType",
                        type: "uint8",
                        internalType: "enum ManifestAssociatedFunctionType",
                      },
                      {
                        name: "functionId",
                        type: "uint8",
                        internalType: "uint8",
                      },
                      {
                        name: "dependencyIndex",
                        type: "uint256",
                        internalType: "uint256",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        stateMutability: "pure",
      },
      {
        type: "function",
        name: "pluginMetadata",
        inputs: [],
        outputs: [
          {
            name: "",
            type: "tuple",
            internalType: "struct PluginMetadata",
            components: [
              { name: "name", type: "string", internalType: "string" },
              { name: "version", type: "string", internalType: "string" },
              { name: "author", type: "string", internalType: "string" },
              {
                name: "permissionDescriptors",
                type: "tuple[]",
                internalType: "struct SelectorPermission[]",
                components: [
                  {
                    name: "functionSelector",
                    type: "bytes4",
                    internalType: "bytes4",
                  },
                  {
                    name: "permissionDescription",
                    type: "string",
                    internalType: "string",
                  },
                ],
              },
            ],
          },
        ],
        stateMutability: "pure",
      },
      {
        type: "function",
        name: "postExecutionHook",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "preExecHookData", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "preExecutionHook",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "sender", type: "address", internalType: "address" },
          { name: "value", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "preRuntimeValidationHook",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "sender", type: "address", internalType: "address" },
          { name: "value", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "preUserOpValidationHook",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          {
            name: "userOp",
            type: "tuple",
            internalType: "struct UserOperation",
            components: [
              { name: "sender", type: "address", internalType: "address" },
              { name: "nonce", type: "uint256", internalType: "uint256" },
              { name: "initCode", type: "bytes", internalType: "bytes" },
              { name: "callData", type: "bytes", internalType: "bytes" },
              {
                name: "callGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "verificationGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "preVerificationGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxPriorityFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterAndData",
                type: "bytes",
                internalType: "bytes",
              },
              { name: "signature", type: "bytes", internalType: "bytes" },
            ],
          },
          { name: "userOpHash", type: "bytes32", internalType: "bytes32" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "removeSessionKey",
        inputs: [
          { name: "sessionKey", type: "address", internalType: "address" },
          { name: "predecessor", type: "bytes32", internalType: "bytes32" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "resetSessionKeyGasLimitTimestamp",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "rotateSessionKey",
        inputs: [
          {
            name: "oldSessionKey",
            type: "address",
            internalType: "address",
          },
          { name: "predecessor", type: "bytes32", internalType: "bytes32" },
          {
            name: "newSessionKey",
            type: "address",
            internalType: "address",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "runtimeValidationFunction",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          { name: "sender", type: "address", internalType: "address" },
          { name: "value", type: "uint256", internalType: "uint256" },
          { name: "data", type: "bytes", internalType: "bytes" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "sessionKeysOf",
        inputs: [{ name: "account", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "supportsInterface",
        inputs: [
          { name: "interfaceId", type: "bytes4", internalType: "bytes4" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "updateKeyPermissions",
        inputs: [
          { name: "sessionKey", type: "address", internalType: "address" },
          { name: "updates", type: "bytes[]", internalType: "bytes[]" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "userOpValidationFunction",
        inputs: [
          { name: "functionId", type: "uint8", internalType: "uint8" },
          {
            name: "userOp",
            type: "tuple",
            internalType: "struct UserOperation",
            components: [
              { name: "sender", type: "address", internalType: "address" },
              { name: "nonce", type: "uint256", internalType: "uint256" },
              { name: "initCode", type: "bytes", internalType: "bytes" },
              { name: "callData", type: "bytes", internalType: "bytes" },
              {
                name: "callGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "verificationGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "preVerificationGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxPriorityFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterAndData",
                type: "bytes",
                internalType: "bytes",
              },
              { name: "signature", type: "bytes", internalType: "bytes" },
            ],
          },
          { name: "userOpHash", type: "bytes32", internalType: "bytes32" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "nonpayable",
      },
      {
        type: "event",
        name: "PermissionsUpdated",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sessionKey",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "updates",
            type: "bytes[]",
            indexed: false,
            internalType: "bytes[]",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "SessionKeyAdded",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sessionKey",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "tag",
            type: "bytes32",
            indexed: true,
            internalType: "bytes32",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "SessionKeyRemoved",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "sessionKey",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "SessionKeyRotated",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "oldSessionKey",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "newSessionKey",
            type: "address",
            indexed: true,
            internalType: "address",
          },
        ],
        anonymous: false,
      },
      { type: "error", name: "AlreadyInitialized", inputs: [] },
      {
        type: "error",
        name: "ERC20SpendLimitExceeded",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
          { name: "token", type: "address", internalType: "address" },
        ],
      },
      { type: "error", name: "InvalidAction", inputs: [] },
      {
        type: "error",
        name: "InvalidPermissionsUpdate",
        inputs: [
          { name: "updateSelector", type: "bytes4", internalType: "bytes4" },
        ],
      },
      {
        type: "error",
        name: "InvalidSessionKey",
        inputs: [
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
      },
      {
        type: "error",
        name: "InvalidSignature",
        inputs: [
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
      },
      {
        type: "error",
        name: "InvalidToken",
        inputs: [{ name: "token", type: "address", internalType: "address" }],
      },
      { type: "error", name: "LengthMismatch", inputs: [] },
      {
        type: "error",
        name: "NativeTokenSpendLimitExceeded",
        inputs: [
          { name: "account", type: "address", internalType: "address" },
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
      },
      {
        type: "error",
        name: "NotContractCaller",
        inputs: [{ name: "caller", type: "address", internalType: "address" }],
      },
      {
        type: "error",
        name: "NotImplemented",
        inputs: [
          { name: "selector", type: "bytes4", internalType: "bytes4" },
          { name: "functionId", type: "uint8", internalType: "uint8" },
        ],
      },
      { type: "error", name: "NotInitialized", inputs: [] },
      {
        type: "error",
        name: "SessionKeyNotFound",
        inputs: [
          { name: "sessionKey", type: "address", internalType: "address" },
        ],
      },
    ],
    bytecode:
      "0x608080604052600436101561001357600080fd5b60003560e01c90816301ffc9a714611c12575080630b45f4b414611be65780630c7ecd84146109415780631128186d14611ba8578063118a5389146118a65780632237570a146118325780632d1064191461175f57806331d99c2c1461138957806336d0b31a1461131857806346d60eb21461094157806364b2bd2514611286578063684d07c5146112335780636d61fe7014610e1c57806385cb6e9514610d5257806388e18ce414610d3d5780638a91b0e314610c2857806398e2c27a14610bec5780639aa74d2314610ba5578063a1b9d5f414610ad0578063af87348314610aaf578063b7967b7114610a66578063bb31989314610a21578063bc3b924614610958578063bfd151c114610941578063c7763130146102b0578063cfbb14ad14610257578063e5282cbd146101bc5763e8a932df1461015357600080fd5b346101b75760803660031901126101b75761016c611cb2565b610174611cc8565b9061017d611cde565b916064356001600160e01b0319811681036101b757602093836101a56101ab9460ff96613020565b90613344565b54166040519015158152f35b600080fd5b346101b75760403660031901126101b75761021e6101d8611cb2565b6101e96101e3611cc8565b82613020565b90606091826040516001600160a01b03602082019460808301604052838352168452630b5ff94b60e11b604082015201522090565b805460681c60ff161561024d576001600160a01b0360036020920154165b6001600160a01b0360405191168152f35b506020600061023c565b346101b75760603660031901126101b7576040610296610275611cb2565b61027d611cc8565b90610290610289611cde565b9282613020565b90613056565b5460ff8251918181161515835260081c1615156020820152f35b346101b75760003660031901126101b7576102c9612ec3565b506102d2612ec3565b6103036040516102e181612091565b60028152604036602083013780602084015263f23b1ed760e01b918291611f0c565b526103116020830151611f19565b52630c76670b60e21b610340604051610329816120ad565b6005815260a0366020830137806040850152611f0c565b52639aa74d2360e01b6103566040830151611f19565b526364b2bd2560e01b61036c6040830151611f29565b526385cb6e9560e01b6103826040830151611f39565b5263bb31989360e01b6103986040830151611f49565b52604051906103a682612091565b6001825260006020830152600060408301526040516103c481612091565b600281526000602082015260016040820152604051926103e3846120ad565b6005845260005b60a08110610901575061043290839460e06105039501526040519061040e82612043565b630c76670b60e21b8252602082015260e08501519061042c82611f0c565b52611f0c565b5061046760405161044281612043565b639aa74d2360e01b815282602082015260e08501519061046182611f19565b52611f19565b5061049c60405161047781612043565b6364b2bd2560e01b815282602082015260e08501519061049682611f29565b52611f29565b506104d16040516104ac81612043565b6385cb6e9560e01b815282602082015260e0850151906104cb82611f39565b52611f39565b50604051906104df82612043565b63bb31989360e01b8252602082015260e0830151906104fd82611f49565b52611f49565b5060405161051081612091565b60028152600060208201526000604082015260405161052e81612075565b6004815260005b608081106108c15750906106059161010084015261057860405161055881612043565b639aa74d2360e01b81528260208201526101008501519061042c82611f0c565b506105a860405161058881612043565b6364b2bd2560e01b81528260208201526101008501519061046182611f19565b506105d86040516105b881612043565b6385cb6e9560e01b81528260208201526101008501519061049682611f29565b50604051906105e682612043565b63bb31989360e01b82526020820152610100830151906104cb82611f39565b5060405161061281612043565b6001815260005b60208110610881575061014082015261067560405161063781612091565b6004815260006020820152600060408201526040519061065682612043565b630c76670b60e21b825260208201526101408301519061042c82611f0c565b5060016080820152600160a08201526040518091602082526106f06106da6106c46106ae845161018060208801526101a0870190611e4a565b6020850151868203601f19016040880152611e4a565b6040840151858203601f19016060870152611e4a565b6060830151848203601f19016080860152611e4a565b6080820151151560a084015260a0820151151560c084015260c082015190601f198482030160e0850152815180825260208201916020808360051b8301019401926000915b8383106108285787808861079161075d8a60e0840151601f1986830301610100870152611eb7565b61077b6101008401519161012092601f198783030184880152611eb7565b90830151848203601f1901610140860152611eb7565b6107af6101408301519161016092601f198683030184870152611eb7565b91015190601f19838203016101808401526020808351928381520192019060005b8181106107de575050500390f35b91935091602060e060019261081a604088516001600160e01b0319815116845261080e8682015187860190611e92565b01516080830190611e92565b0194019101918493926107d0565b9193959650919360208061086e600193601f19868203018752606060408b516001600160a01b038151168452858101511515868501520151918160408201520190611e4a565b9701930193019092879695949293610735565b60209060405161089081612043565b600081526040516108a081612091565b60008152600084820152600060408201528382015282828501015201610619565b6020906040516108d081612043565b600081526040516108e081612091565b60008152600084820152600060408201528382015282828501015201610535565b60209060405161091081612043565b6000815260405161092081612091565b600081526000848201526000604082015283820152828288010152016103ea565b346101b75761094f36611d36565b50505050612014565b346101b75760403660031901126101b75760a0610973611cb2565b61099161097e611cc8565b916101e961098a612154565b9382613020565b60ff815460781c16156109e5575b506109e3604051809260809080511515835260208101516020840152604081015160408401528160608201519165ffffffffffff8093166060860152015116910152565bf35b600290600183526006810154602084015260078101546040840152015465ffffffffffff90818160301c1660608401521660808201528261099f565b346101b75760403660031901126101b757610a3a611cb2565b6024359067ffffffffffffffff82116101b757610a5e610a64923690600401611dd4565b91612816565b005b346101b75760403660031901126101b75760ff610a846101d8611cb2565b54166040516003821015610a99576020918152f35b634e487b7160e01b600052602160045260246000fd5b346101b7576020610ac8610ac236611e05565b9161235f565b604051908152f35b346101b75760403660031901126101b75760c0610aeb611cb2565b60ff610b0b610af8611cc8565b926101e9610b04612154565b9482613020565b805490828260701c16610b6a575b50610b5d604051809460809080511515835260208101516020840152604081015160408401528160608201519165ffffffffffff8093166060860152015116910152565b60801c16151560a0820152f35b6001908185526004810154602086015260058101546040860152015465ffffffffffff90818160301c16606086015216608084015284610b19565b346101b75760603660031901126101b757610bbe611cb2565b6044359067ffffffffffffffff82116101b757610be2610a64923690600401611dd4565b91602435906121f5565b346101b75760403660031901126101b7576040610c0a6101d8611cb2565b5465ffffffffffff825191818160081c16835260381c166020820152f35b346101b75760203660031901126101b75760043567ffffffffffffffff81116101b757610c59903690600401611d08565b5050610c6c610c6733612f30565b612fed565b805160005b818110610ce457610ca2336001600160a01b0360405191168152637c9c64bb60e11b60208201526001604082015290565b60608101906001805b15610cca575b825260808120805460009182905561fffe191690610cab565b600181161580610cdb575b610cb157005b50801515610cd5565b6001906001600160a01b03610d0581610cfd8488611f59565b51163361316f565b610d0f8286611f59565b5116337f5452d520aafcdb6d13f259687b2f67d62b3e81f7f46496802e6c0c1ecedcf570600080a301610c71565b346101b757610d4b36611e05565b5050612014565b346101b75760603660031901126101b757610d6b611cb2565b610d73611cde565b6001600160a01b0391828116916bffffffffffffffffffffffff1993610da1602435868560601b16336130da565b15610e0457610db8908216948260601b16336131f5565b15610e045790610ddc91610dd6610dcf8333613278565b923361316f565b336131bc565b337ff14b99d79702560c5e65f01cde44c5648f6054c5cf3fd20c18c2ca74be6f6168600080a4005b6024846040519063d3d0f65960e01b82526004820152fd5b346101b75760203660031901126101b75760043567ffffffffffffffff81116101b757610e4d903690600401611d08565b333b15611203576080610e80336001600160a01b0360405191168152637c9c64bb60e11b60208201526001604082015290565b60016060820152205480159081156111f8575b50156111ce5760608282810103126101b757813567ffffffffffffffff81116101b757820190808301601f830112156101b757813591610ed28361213c565b92610ee060405194856120c9565b80845260208085019160051b8301019183860183116101b757602001905b8282106111b657505050602083013567ffffffffffffffff81116101b757830192818101601f850112156101b757833593610f388561213c565b94610f4660405196876120c9565b80865260208087019160051b8301019184840183116101b757602001905b8282106111a65750505060408101359167ffffffffffffffff83116101b757808201601f8484010112156101b7576020610fa08484013561213c565b610fad60405191826120c9565b848401358152019080830160208585013560051b8686010101116101b757602084840101915b838501803560051b0160200183106110e157505050825192845184148015906110d4575b6110aa5760005b84811061100757005b6001600160a01b036110198284611f59565b5116906110268188611f59565b518585013582101561109457848601600583901b810160200135903603603e19018112156101b7578686010167ffffffffffffffff6020820135116101b757602081013560051b360360408201136101b75760019361108e92604060208401359301916121f5565b01610ffe565b634e487b7160e01b600052603260045260246000fd5b60046040517fff633a38000000000000000000000000000000000000000000000000000000008152fd5b5082820135841415610ff7565b823567ffffffffffffffff81116101b757828501603f82888801010112156101b7576020818787010101356111158161213c565b9161112360405193846120c9565b8183526020830185880160408460051b848c8c01010101116101b7576040828a8a010101905b60408460051b848c8c01010101821061116f575050509082525060209283019201610fd3565b813567ffffffffffffffff81116101b75760209161119b8b604085948f89908e850194010101016122ea565b815201910190611149565b8135815260209182019101610f64565b602080916111c384611cf4565b815201910190610efe565b60046040517f0dc149f0000000000000000000000000000000000000000000000000000000008152fd5b600191501683610e93565b60246040517fa425f81d000000000000000000000000000000000000000000000000000000008152336004820152fd5b346101b75760403660031901126101b75761124f6101d8611cb2565b80549060ff8260801c1661125f57005b60ff60801b199091168155600101805465ffffffffffff19164265ffffffffffff16179055005b346101b75760403660031901126101b75761129f611cb2565b6001600160a01b038116906112c96024356bffffffffffffffffffffffff198360601b16336130da565b15611300576112d8903361316f565b337f5452d520aafcdb6d13f259687b2f67d62b3e81f7f46496802e6c0c1ecedcf570600080a3005b6024826040519063d3d0f65960e01b82526004820152fd5b346101b7576020806003193601126101b75761133d610c67611338611cb2565b612f30565b906040519181839283018184528251809152816040850193019160005b82811061136957505050500390f35b83516001600160a01b03168552869550938101939281019260010161135a565b346101b75760403660031901126101b75767ffffffffffffffff6004358181116101b7576113bb903690600401611dd4565b916113c4611cc8565b6000906113d18133613278565b9161140b8333606091826040516001600160a01b03602082019460808301604052838352168452630b5ff94b60e11b604082015201522090565b9260005b8781106116a157505060ff835460781c1615611643575b505080549060ff8260801c16611617575b50506114428361213c565b9161145060405193846120c9565b83835261145c8461213c565b60209490601f19018560005b8281106116085750505060005b8181106114da57604080518781528651818901819052600092600582901b8301810191898b01918b9085015b8287106114ae5785850386f35b9091929382806114ca600193603f198a82030186528851611daf565b96019201960195929190926114a1565b6114e581838561217f565b9081356001600160a01b0381168091036101b7578260009161155661150e60408c9701846121a1565b60405197889586957f38997b110000000000000000000000000000000000000000000000000000000087526004870152013560248501526060604485015260648401916121d4565b038183335af180156115fc5760009061158a575b600192506115788288611f59565b526115838187611f59565b5001611475565b503d806000843e61159b81846120c9565b82019187818403126101b7578051908682116101b757019180601f840112156101b7578251926115ca84612120565b916115d860405193846120c9565b8483528985830101116101b7576001936115f7918a8085019101611d8c565b61156a565b6040513d6000823e3d90fd5b60608782018301528101611468565b60ff60801b199091168155600101805465ffffffffffff19164265ffffffffffff161790558380611437565b611656906006840190600285019061342d565b156116615780611426565b6044906001600160a01b03604051917fc8cfd93b000000000000000000000000000000000000000000000000000000008352336004840152166024820152fd5b6116c46116b8366116b3848c8c61217f565b612308565b936020850151906130b7565b926001600160a01b03906116dc828251168533613056565b60ff815460101c166116f4575b50505060010161140f565b6117139061170560408401516133e2565b60016002830192019061342d565b1561171e57806116e9565b516040517f58081344000000000000000000000000000000000000000000000000000000008152336004820152868316602482015291166044820152606490fd5b346101b75760603660031901126101b75760a06117a161177d611cb2565b611785611cc8565b90610290611791611cde565b9261179a612154565b5082613020565b60ff815460101c1690600281015490600160038201549101549065ffffffffffff92604051946117d086612075565b1515855260208501526040840152818160301c1660608401521660808201526109e3604051809260809080511515835260208101516020840152604081015160408401528160608201519165ffffffffffff8093166060860152015116910152565b346101b75760403660031901126101b7576020608061184f611cb2565b61188161185a611cc8565b916001600160a01b0360405191168152637c9c64bb60e11b60208201526001604082015290565b906bffffffffffffffffffffffff199060601b16606082015220541515604051908152f35b346101b75760003660031901126101b7576118bf6120eb565b506118c86120eb565b604051906118d582612043565b601282526020917f53657373696f6e204b657920506c7567696e00000000000000000000000000008382015281526040519161191083612043565b600583527f312e302e30000000000000000000000000000000000000000000000000000000818401528082019283526040519261194c84612043565b600784527f416c6368656d790000000000000000000000000000000000000000000000000082850152604083019384526040519361198985612043565b601385527f4d6f646966792053657373696f6e204b65797300000000000000000000000000838601526040516119be81612043565b601e81527f4d6f646966792053657373696f6e204b6579205065726d697373696f6e73000084820152604051956119f487612075565b6004875260005b60808110611b7e5750611b029291611a94611abc9260608901998a52611a41604051611a2681612043565b639aa74d2360e01b8152828a8201528b519061042c82611f0c565b50611a6c604051611a5181612043565b6364b2bd2560e01b8152828a8201528b519061046182611f19565b5060405190611a7a82612043565b6385cb6e9560e01b82528882015289519061049682611f29565b5060405190611aa282612043565b63bb31989360e01b8252868201528751906104cb82611f39565b50611af1611adb604051968688525160808789015260a0880190611daf565b935193601f199485888303016040890152611daf565b905183868303016060870152611daf565b9351918184860301608085015282519081865280860181808460051b8901019501936000975b848910611b355787870388f35b9091929394958480611b6c838686600196030188526040838c516001600160e01b0319815116845201519181858201520190611daf565b98019401980197919094939294611b28565b8590604098959851611b8f81612043565b60008152606083820152828288010152019693966119fb565b346101b75760403660031901126101b75760043560ff811681036101b75760243567ffffffffffffffff81116101b757610d4b903690600401611d08565b346101b75760403660031901126101b7576020610ac8611c04611cb2565b611c0c611cc8565b90611f6d565b346101b75760203660031901126101b757600435906001600160e01b031982168092036101b757817f5b051d220000000000000000000000000000000000000000000000000000000060209314908115611c6e575b5015158152f35b63f23b1ed760e01b811491508115611c88575b5083611c67565b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501483611c81565b600435906001600160a01b03821682036101b757565b602435906001600160a01b03821682036101b757565b604435906001600160a01b03821682036101b757565b35906001600160a01b03821682036101b757565b9181601f840112156101b75782359167ffffffffffffffff83116101b757602083818601950101116101b757565b9060806003198301126101b75760043560ff811681036101b757916024356001600160a01b03811681036101b75791604435916064359067ffffffffffffffff82116101b757611d8891600401611d08565b9091565b60005b838110611d9f5750506000910152565b8181015183820152602001611d8f565b90602091611dc881518092818552858086019101611d8c565b601f01601f1916010190565b9181601f840112156101b75782359167ffffffffffffffff83116101b7576020808501948460051b0101116101b757565b906003196060818401126101b75760043560ff811681036101b757926024359167ffffffffffffffff83116101b75782610160920301126101b7576004019060443590565b90815180825260208080930193019160005b828110611e6a575050505090565b83516001600160e01b03191685529381019392810192600101611e5c565b60051115610a9957565b604080918051611ea181611e88565b845260ff60208201511660208501520151910152565b90815180825260208080930193019160005b828110611ed7575050505090565b90919293826080600192611f008389516001600160e01b03198151168452015184830190611e92565b01950193929101611ec9565b8051156110945760200190565b8051600110156110945760400190565b8051600210156110945760600190565b8051600310156110945760800190565b8051600410156110945760a00190565b80518210156110945760209160051b010190565b610c67611f7991612f30565b80519060019360016000905b848210611fc6576024866001600160a01b03604051917f786c5386000000000000000000000000000000000000000000000000000000008352166004820152fd5b6001600160a01b0380611fd98487611f59565b51169087161461200a5750856bffffffffffffffffffffffff19611ffd8386611f59565b5160601b16910190611f85565b9450509350505090565b6040516384b9b37960e01b81526001600160e01b031960003516600482015260ff919091166024820152604490fd5b6040810190811067ffffffffffffffff82111761205f57604052565b634e487b7160e01b600052604160045260246000fd5b60a0810190811067ffffffffffffffff82111761205f57604052565b6060810190811067ffffffffffffffff82111761205f57604052565b60c0810190811067ffffffffffffffff82111761205f57604052565b90601f8019910116810190811067ffffffffffffffff82111761205f57604052565b604051906080820182811067ffffffffffffffff82111761205f57604052606080838181528160208201528160408201520152565b67ffffffffffffffff811161205f57601f01601f191660200190565b67ffffffffffffffff811161205f5760051b60200190565b6040519061216182612075565b60006080838281528260208201528260408201528260608201520152565b91908110156110945760051b81013590605e19813603018212156101b7570190565b903590601e19813603018212156101b7570180359067ffffffffffffffff82116101b7576020019181360383136101b757565b908060209392818452848401376000828201840152601f01601f1916010190565b9291906001600160a01b03841661221e6bffffffffffffffffffffffff198660601b16336131f5565b1561229b5760003381528060205260408120805460001981146122875790600161224d920180915587336131bc565b7f51b5ab8125ba8bf73818ab051a4ade25a7f14fe001150888fa54fcba781c8ae4339180a48161227c57505050565b61228592612816565b565b602483634e487b7160e01b81526011600452fd5b6024906040519063d3d0f65960e01b82526004820152fd5b9291926122bf82612120565b916122cd60405193846120c9565b8294818452818301116101b7578281602093846000960137010152565b9080601f830112156101b757816020612305933591016122b3565b90565b91906060838203126101b7576040519061232182612091565b819361232c81611cf4565b83526020810135602084015260408101359167ffffffffffffffff83116101b75760409261235a92016122ea565b910152565b9160ff80841615612397576040516384b9b37960e01b81526001600160e01b031960003516600482015260ff85166024820152604490fd5b909192506123a860608401846121a1565b806004939293116101b757820192604083850360031901126101b75767ffffffffffffffff9260048101358481116101b757810193856023860112156101b75760249060048601356123f98161213c565b9661240760405198896120c9565b818852602098602460208a019360051b830101948186116101b75760248301935b8685106127f1575050505050505060246124429101611cf4565b916001600160a01b0392838116966000937f19457468657265756d205369676e6564204d6573736167653a0a3332000000008552601c5261249e603c85206124986124916101408501856121a1565b36916122b3565b906132c3565b6124a781611e88565b156124dd57602489604051907fd855c4f40000000000000000000000000000000000000000000000000000000082526004820152fd5b8560806bffffffffffffffffffffffff9a9495969798999a199586612522336001600160a01b0360405191168152637c9c64bb60e11b60208201526001604082015290565b9160601b1660608201522054151591826127e5575b505061254a575050505050505050600190565b612558829897949833613278565b976125928933606091826040516001600160a01b03602082019460808301604052838352168452630b5ff94b60e11b604082015201522090565b928354998a968965ffffffffffff8960081c169b8a93835191878315159c16918d955b84871061278d5750505050505050828b60781c161561276d575b50818a60701c166126c7575b5090829187935460681c16612668575b50505050600014612634577fffffffffffff000000000000000000000000000000000000000000000000000065ffffffffffff60a01b91935b60d01b169360681b169116171790565b5065ffffffffffff60a01b7fffffffffffff0000000000000000000000000000000000000000000000000000600193612624565b806101206126779201906121a1565b93903581811694601481106126b2575b5050508361269c575b505050388381806125eb565b6003919293500154169060601c14388381612690565b60140360031b82901b16169250388080612687565b8682999685859461274d9460208d9998013560401c03612765575b61272e6127236127196127399361273e96976127026101208c018c6121a1565b15915061275e90505760035b1660a08a01356132f7565b60808901356130b7565b60c0880135906130b7565b60e0870135906132f7565b6136dd565b919081612756575b50966136c0565b979091926125db565b905038612746565b600161270e565b8392506126e2565b9561273e612786929a9760068701906002880190613639565b97386125cf565b9193959c6001919395976127b18f6127a59086611f59565b519187830151906130b7565b98826127c8575b50509c01949290918e94926125b5565b6127de925060409082511691015190858861354b565b8f806127b8565b16831490508638612537565b84358681116101b7578c9161280b85858594890101612308565b815201940193612428565b6128208133613020565b6128598133606091826040516001600160a01b03602082019460808301604052838352168452630b5ff94b60e11b604082015201522090565b9060005b85811061292c575050506040519260209080602086016020875252604085019160408260051b8701019480936000915b8483106128ce575050505050506001600160a01b037f5e009edbae60e9d9dad056b2eba09cf2520596f0a9dbbabf9716ef5802e783769116928033930390a3565b909192939496603f198982030183528735601e19833603018112156101b757820185810191903567ffffffffffffffff81116101b75780360383136101b75761291c879283926001956121d4565b990193019301919493929061288d565b61293b8160051b8601866121a1565b908035916001600160e01b0319808416600494828685109182612eaf575b5050612e975781167f8f2920d80000000000000000000000000000000000000000000000000000000081036129c45750508083116101b757602090820182900360031901126101b75701359060038210156101b75760019160ff801986541691161784555b0161285d565b9394937f9e7345eb000000000000000000000000000000000000000000000000000000008103612a715750508084116101b757606090820182900360031901126101b757612a156001938201611cf4565b612a57612a446001600160a01b03612a3b6044612a3460248801613337565b9601613337565b93168733613056565b92839060ff801983541691151516179055565b815461ff00191690151560081b61ff00161790555b6129be565b7f0c8de0020000000000000000000000000000000000000000000000000000000081969392949614600014612b0957508082116101b757606090850185900360031901126101b757612ac4908401611cf4565b602484013591821682036101b757612af8612a6c926001600160a01b03612aef604460019801613337565b93168733613344565b9060ff801983541691151516179055565b91949250907f9a37b113000000000000000000000000000000000000000000000000000000008103612ba357508084116101b757604090820182900360031901126101b757612b676024612b60600195840161330a565b920161330a565b66ffffffffffff006cffffffffffff0000000000000087549260381b169260081b16906cffffffffffffffffffffffff001916171784556129be565b9193917fb3a26f5c000000000000000000000000000000000000000000000000000000008103612c2d57508082116101b75783612bf992612be99260019601910161331d565b9060068701916002880191613846565b84546fff0000000000000000000000000000001916901560781b6fff000000000000000000000000000000161784556129be565b909391907f7b1f0893000000000000000000000000000000000000000000000000000000008103612d0f57509091928082116101b757606090830183900360031901126101b757612c7f818301611cf4565b916024916001600160a01b03612c976044840161330a565b9416908115612ce1575091612cc691612cb560019695948833613056565b936002850192878601920135613846565b815462ff0000191690151560101b62ff0000161790556129be565b9150604051917f961c9a4f000000000000000000000000000000000000000000000000000000008352820152fd5b7f585ca4a5000000000000000000000000000000000000000000000000000000008103612db057508381116101b757612d528282600196612d6e9501910161331d565b91875460ff8160801c16612da1575b5087019185880191613846565b84546eff0000000000000000000000000000191690151560701b6eff0000000000000000000000000000161784556129be565b60ff60801b1916885538612d61565b919390917fb85631d7000000000000000000000000000000000000000000000000000000008103612e8057508082116101b757602090840184900360031901126101b757612e096001600160a01b039160019401611cf4565b1680612e2a575083546dff00000000000000000000000000191684556129be565b6d01000000000000000000000000006dff000000000000000000000000001986541617855560038501907fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790556129be565b8260249160405191635312ce6160e01b8352820152fd5b604051635312ce6160e01b8152911681850152602490fd5b85880360031b82901b161691508238612959565b60405190610180820182811067ffffffffffffffff82111761205f5760405281610160606091828152826020820152826040820152828082015260006080820152600060a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b906001600160a01b0360405192168252637c9c64bb60e11b602083015260019182604082015260008360009260608101908282526080906080812054926040519560808701995b612f91575b5050505050820160051b016080016040528252565b90919293968588161580612fe4575b15612fde5761fffe198816908601600581901b880186018290529760021615612fd657825283832054855b949392919094612f77565b508085612fcb565b96612f7c565b50871515612fa0565b805160005b818110612ffe57505090565b8061300b60019285611f59565b5160601c6130198286611f59565b5201612ff2565b8161302a91613278565b908115613035575090565b6024906001600160a01b036040519163d3d0f65960e01b8352166004820152fd5b9061230592916040519260a08401604052608084526001600160a01b0380921660208501527f634c29f50000000000000000000000000000000000000000000000000000000060408501521690606083015260808201526020815191012090565b919082018092116130c457565b634e487b7160e01b600052601160045260246000fd5b9061ffff1916906001600160a01b0360405191168152637c9c64bb60e11b60208201526001604082015261fffe198093169081158015613167575b613154576060810191825260808120928084549586160361315d57608092522090815480156131545761fffc600094169061fffc191617905555600190565b50505050600090565b5050505050600090565b508215613115565b906001600160a01b036131ab600093906001600160a01b0360405192608084016040526060845216602083015263068076b960e21b6040830152565b911660608201526020815191012055565b6131ab6001600160a01b0391906001600160a01b0360405192608084016040526060845216602083015263068076b960e21b6040830152565b9061ffff1916908115613271576001600160a01b0360405191168152637c9c64bb60e11b602082015260016040820152606081018281526080822091825461315457600160809252209182549283158015613267575b1561325b57600193505555600190565b90600217905555600190565b506001841661324b565b5050600090565b6132b16001600160a01b0391906001600160a01b0360405192608084016040526060845216602083015263068076b960e21b6040830152565b91166060820152602081519101205490565b9060418151146000146132ed57611d88916020820151906060604084015193015160001a906134bc565b5050600090600290565b818102929181159184041417156130c457565b359065ffffffffffff821682036101b757565b91908260409103126101b75761230560208335930161330a565b359081151582036101b757565b926001600160e01b0319612305946040519460a08601604052608086526001600160a01b0380921660208701527fd50536f00000000000000000000000000000000000000000000000000000000060408701521691161790606083015260808201526020815191012090565b90602082519201516001600160e01b03199081811693600481106133d357505050565b60040360031b82901b16169150565b6133f36133ee826133b0565b6137e7565b6133fd5750600090565b604481511061340d576044015190565b50600090565b91909165ffffffffffff808094169116019182116130c457565b9181549165ffffffffffff90818460301c1691600184549401948554938281159283156134a4575b5050506000146134835750508301928310908115613479575b506132715755600190565b905082113861346e565b939150939182116131545755421665ffffffffffff19825416179055600190565b6134af935016613413565b8142911611388281613455565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831161353f5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156135325781516001600160a01b0381161561352c579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b9392919061355a6001936133b0565b92613566838333613056565b956003811015610a9957806135dd575050845460ff8116156135d35760081c60ff16156135ca5761359c8360ff93849333613344565b5416935b5460101c1690816135b9575b506135b357565b60009150565b6135c391506137e7565b15386135ac565b50600193505050565b5060009450505050565b908096939291146135f3575b505060ff906135a0565b90919485549060ff821615613631575060081c60ff16156136285761361d8360ff93849333613344565b5416159390386135e9565b50600093505050565b955050505050565b9291909260008094549065ffffffffffff808360301c169160018601549554958501948086106136b4578361367357505050505011159190565b909294958092949611156000146136905750505050505060019190565b94969394929392116136ac575050906123059160019416613413565b945092915050565b50965050505050508190565b9065ffffffffffff80821690831611156136d8575090565b905090565b919060008093600183015465ffffffffffff8082169160301c16600585019485549060048101549481549160ff8360801c16938201978289106137d8578561373e57505050505050508111159182613736575b50509190565b553880613730565b9092949795989a9193968087111560001461376d57505050505050600195556000146132715761230591613413565b909295508397949a969193111590816137cf575b50156137c45750506137a770010000000000000000000000000000000091600196613413565b9670ff000000000000000000000000000000001916179055559190565b975095945050505050565b90501538613781565b9a505050505050505050508190565b6001600160e01b0319167fa9059cbb00000000000000000000000000000000000000000000000000000000811490811561381f575090565b7f095ea7b30000000000000000000000000000000000000000000000000000000091501490565b929392600019810361385f575050506000600181930155565b6001945565ffffffffffff90825491806bffffffffffff0000000000008360301b1692836bffffffffffff00000000000019861617865516156000146138b15750505065ffffffffffff198154169055565b4216916bffffffffffffffffffffffff19161717905556fea2646970667358221220c87f67ae7d44dd723b98665fd6dd0be8f9e31fa3ec18a46f41c8b6f99040c7e564736f6c63430008160033",
  },
} as const;

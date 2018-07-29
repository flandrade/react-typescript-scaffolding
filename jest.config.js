module.exports = {
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/test/setup-enzyme.ts",
  "roots": [
    "<rootDir>/test"
  ],
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  "testRegex": "\\.test\\.(ts|tsx)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}

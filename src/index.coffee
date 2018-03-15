import {resolve} from "path"
import MIXIN from "panda-sky-mixin"
import {read} from "fairmont"
import {yaml} from "panda-serialize"

import getPolicyStatements from "./policy"

mixin = do ->

  new MIXIN {
    name: "ses"
    getPolicyStatements
  }

export default mixin

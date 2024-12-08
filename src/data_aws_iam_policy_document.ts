import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamPolicyDocumentArgsStatementCondition {
  test: string;
  values: string[];
  variable: string;
}

export interface DataAwsIamPolicyDocumentArgsStatementNotPrincipals {
  identifiers: string[];
  type: string;
}

export interface DataAwsIamPolicyDocumentArgsStatementPrincipals {
  identifiers: string[];
  type: string;
}

export interface DataAwsIamPolicyDocumentArgsStatement {
  actions?: string[];
  effect?: string;
  not_actions?: string[];
  not_resources?: string[];
  resources?: string[];
  sid?: string;
  condition?: DataAwsIamPolicyDocumentArgsStatementCondition[];
  not_principals?: DataAwsIamPolicyDocumentArgsStatementNotPrincipals[];
  principals?: DataAwsIamPolicyDocumentArgsStatementPrincipals[];
}

export interface DataAwsIamPolicyDocumentArgs {
  override_json?: string;
  override_policy_documents?: string[];
  policy_id?: string;
  source_json?: string;
  source_policy_documents?: string[];
  version?: string;
  statement?: DataAwsIamPolicyDocumentArgsStatement[];
}

export class data_aws_iam_policy_document extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIamPolicyDocumentArgs) {
    const meta = {statement:{isBlock:true,condition:{isBlock:true},not_principals:{isBlock:true},principals:{isBlock:true}}};
    super(terraformConfig, "data", args, meta, "aws_iam_policy_document", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get json(): string {
    return `data.${this.resourceType}.${this.resourceName}.json`;
  }

  get minified_json(): string {
    return `data.${this.resourceType}.${this.resourceName}.minified_json`;
  }
}

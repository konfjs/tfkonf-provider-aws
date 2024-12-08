import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationAuditFindingsDestinationCloudwatchLogs {
  log_group: string;
}

export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationAuditFindingsDestinationFirehose {
  delivery_stream: string;
}

export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationAuditFindingsDestinationS3 {
  bucket: string;
}

export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationAuditFindingsDestination {
  cloudwatch_logs?: DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationAuditFindingsDestinationCloudwatchLogs;
  firehose?: DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationAuditFindingsDestinationFirehose;
  s3?: DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationAuditFindingsDestinationS3;
}

export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationAudit {
  findings_destination: DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationAuditFindingsDestination;
}

export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationDeidentifyMaskConfig {
}

export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationDeidentify {
  mask_config: DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationDeidentifyMaskConfig;
}

export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperation {
  audit?: DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationAudit;
  deidentify?: DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperationDeidentify;
}

export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatement {
  data_identifiers: string[];
  sid?: string;
  operation: DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatementOperation;
}

export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentArgs {
  description?: string;
  name: string;
  version?: string;
  statement: DataAwsCloudwatchLogDataProtectionPolicyDocumentArgsStatement[];
}

export class data_aws_cloudwatch_log_data_protection_policy_document extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCloudwatchLogDataProtectionPolicyDocumentArgs) {
    const meta = {statement:{isBlock:true,operation:{isBlock:true,audit:{isBlock:true,findings_destination:{isBlock:true,cloudwatch_logs:{isBlock:true},firehose:{isBlock:true},s3:{isBlock:true}}},deidentify:{isBlock:true,mask_config:{isBlock:true}}}}};
    super(terraformConfig, "data", args, meta, "aws_cloudwatch_log_data_protection_policy_document", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get json(): string {
    return `data.${this.resourceType}.${this.resourceName}.json`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}

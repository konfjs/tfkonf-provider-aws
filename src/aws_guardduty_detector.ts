import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGuarddutyDetectorArgsDatasourcesKubernetesAuditLogs {
  enable: boolean;
}

export interface AwsGuarddutyDetectorArgsDatasourcesKubernetes {
  audit_logs: AwsGuarddutyDetectorArgsDatasourcesKubernetesAuditLogs;
}

export interface AwsGuarddutyDetectorArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes {
  enable: boolean;
}

export interface AwsGuarddutyDetectorArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindings {
  ebs_volumes: AwsGuarddutyDetectorArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes;
}

export interface AwsGuarddutyDetectorArgsDatasourcesMalwareProtection {
  scan_ec2_instance_with_findings: AwsGuarddutyDetectorArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindings;
}

export interface AwsGuarddutyDetectorArgsDatasourcesS3Logs {
  enable: boolean;
}

export interface AwsGuarddutyDetectorArgsDatasources {
  kubernetes?: AwsGuarddutyDetectorArgsDatasourcesKubernetes;
  malware_protection?: AwsGuarddutyDetectorArgsDatasourcesMalwareProtection;
  s3_logs?: AwsGuarddutyDetectorArgsDatasourcesS3Logs;
}

export interface AwsGuarddutyDetectorArgs {
  enable?: boolean;
  tags?: { [key: string]: string };
  datasources?: AwsGuarddutyDetectorArgsDatasources;
}

export class aws_guardduty_detector extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGuarddutyDetectorArgs) {
    const meta = {datasources:{isBlock:true,kubernetes:{isBlock:true,audit_logs:{isBlock:true}},malware_protection:{isBlock:true,scan_ec2_instance_with_findings:{isBlock:true,ebs_volumes:{isBlock:true}}},s3_logs:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_guardduty_detector", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get finding_publishing_frequency(): string {
    return `${this.resourceType}.${this.resourceName}.finding_publishing_frequency`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}

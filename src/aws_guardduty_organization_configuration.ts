import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesKubernetesAuditLogs {
  enable: boolean;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesKubernetes {
  audit_logs: AwsGuarddutyOrganizationConfigurationArgsDatasourcesKubernetesAuditLogs;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes {
  auto_enable: boolean;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindings {
  ebs_volumes: AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtection {
  scan_ec2_instance_with_findings: AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindings;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasourcesS3Logs {
  auto_enable: boolean;
}

export interface AwsGuarddutyOrganizationConfigurationArgsDatasources {
  kubernetes?: AwsGuarddutyOrganizationConfigurationArgsDatasourcesKubernetes;
  malware_protection?: AwsGuarddutyOrganizationConfigurationArgsDatasourcesMalwareProtection;
  s3_logs?: AwsGuarddutyOrganizationConfigurationArgsDatasourcesS3Logs;
}

export interface AwsGuarddutyOrganizationConfigurationArgs {
  detector_id: string;
  datasources?: AwsGuarddutyOrganizationConfigurationArgsDatasources;
}

export class aws_guardduty_organization_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGuarddutyOrganizationConfigurationArgs) {
    const meta = {datasources:{isBlock:true,kubernetes:{isBlock:true,audit_logs:{isBlock:true}},malware_protection:{isBlock:true,scan_ec2_instance_with_findings:{isBlock:true,ebs_volumes:{isBlock:true}}},s3_logs:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_guardduty_organization_configuration", resourceName);
  }

  get auto_enable(): string {
    return `${this.resourceType}.${this.resourceName}.auto_enable`;
  }

  get auto_enable_organization_members(): string {
    return `${this.resourceType}.${this.resourceName}.auto_enable_organization_members`;
  }

  get detector_id(): string {
    return `${this.resourceType}.${this.resourceName}.detector_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}

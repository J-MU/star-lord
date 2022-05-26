export class Unit {
    constructor(
        attackPower, // 공격력
        attackRange, // 공격 범위
        attackSpeed, // 공격 속도
        attackType, // 공격 타입 
        areaType, // 지상, 공중 타입
        defensivePower, // 방어력 
        healthPoint, // 체력
        shield, // 쉴드
        unitSize, // 유닛 크기
        moveSpeed // 이동 속도
    ) {
        this.attackPower = attackPower;
        this.attackRange = attackRange;
        this.attackSpeed = attackSpeed;
        this.attackType = attackType;
        this.areaType = areaType;
        this.defensivePower = defensivePower;
        this.healthPoint = healthPoint;
        this.shield = shield;
        this.unitSize = unitSize;
        this.moveSpeed = moveSpeed;
    }

    // getter
    getAttackPower() {
        return this.attackPower;
    }

    // setter
    setAttackPower(attackPower) {
        this.attackPower = attackPower;
    }
}

